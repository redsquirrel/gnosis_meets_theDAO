var fs = require('fs');

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://0.0.0.0:8545'));
web3.eth.defaultAccount = web3.eth.coinbase;

var solc = require('solc');

// testnet
var theDAOAddress = '0x055343f7690a15e1b60107a9ed12781e47cd94a5';

var adapterSource = fs.readFileSync('./Gnosis_theDAO_Adapter.sol', 'utf8');
var theDAOSource = fs.readFileSync('./theDAO.sol', 'utf8');

var input = {
  'Gnosis_theDAO_Adapter.sol': adapterSource,
  'theDAO.sol': theDAOSource
};

console.log('Compiling...');

var output = solc.compile({ sources: input }, 1);

if (output.errors) {
  console.error(output.errors);
  process.exit(1);
} else {
  console.log('Contract compiled successfully.');
}

console.log('Gnosis_theDAO_Adapter ABI:');
console.log(output.contracts.Gnosis_theDAO_Adapter.interface);

var adapterABI = JSON.parse(output.contracts.Gnosis_theDAO_Adapter.interface);
var adapterCode = output.contracts.Gnosis_theDAO_Adapter.bytecode;

web3.eth.contract(adapterABI).new(
  theDAOAddress,
  {data: adapterCode, gas: 2000000},
  function(err, contract) {
  if (err) {
    console.error(err);
    process.exit(1);
  } else if (contract.address) {
    console.log('Gnosis_theDAO_Adapter deployed to '+contract.address);
  } else {
    console.log('Waiting for mining.');
  }
});
