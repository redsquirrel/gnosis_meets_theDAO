var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://0.0.0.0:8545'));
web3.eth.defaultAccount = web3.eth.coinbase;

var address = '0x29dadd3d9fd56a7926d02f7c7f14bf97d3c1f25d';
var abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"openProposalIDs","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numProposals","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"dao","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"type":"function"},{"inputs":[{"name":"theDAO","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"proposalPassed","type":"bool"}],"name":"SendToGnosis","type":"event"}];

var instance = web3.eth.contract(abi).at(address);

instance.sync({gas: 2000000}, function(err, txHash) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('sync tx sent, waiting for mining...');
  var interval = setInterval(function() {
    web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      if (receipt) {
        console.log('sync processed');
        clearInterval(interval);
        checkData();
      }
    });
  }, 1000);
});

function checkData() {
  console.log(instance.numProposals());
}
