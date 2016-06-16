var SolidityEvent = require('web3/lib/web3/event');
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://0.0.0.0:8545'));
web3.eth.defaultAccount = web3.eth.coinbase;

var abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"description","type":"string"},{"name":"votingDeadline","type":"uint256"},{"name":"open","type":"bool"},{"name":"proposalPassed","type":"bool"},{"name":"proposalHash","type":"bytes32"},{"name":"proposalDeposit","type":"uint256"},{"name":"newCurator","type":"bool"},{"name":"yea","type":"uint256"},{"name":"nay","type":"uint256"},{"name":"creator","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"minTokensToCreate","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"rewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"daoCreator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"divisor","outputs":[{"name":"divisor","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"extraBalance","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"executeProposal","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"unblockMe","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalRewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"actualBalance","outputs":[{"name":"_actualBalance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"closingTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedRecipients","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_description","type":"string"},{"name":"_transactionData","type":"bytes"},{"name":"_debatingPeriod","type":"uint256"},{"name":"_newCurator","type":"bool"}],"name":"newProposal","outputs":[{"name":"_proposalID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"DAOpaidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"minQuorumDivisor","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newContract","type":"address"}],"name":"newContract","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_allowed","type":"bool"}],"name":"changeAllowedRecipients","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"halveMinQuorum","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"paidOut","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_newCurator","type":"address"}],"name":"splitDAO","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"DAOrewardAccount","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"proposalDeposit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numberOfProposals","outputs":[{"name":"_numberOfProposals","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"lastTimeMinQuorumMet","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_toMembers","type":"bool"}],"name":"retrieveDAOReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"receiveEther","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"isFueled","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_tokenHolder","type":"address"}],"name":"createTokenProxy","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"}],"name":"getNewDAOAddress","outputs":[{"name":"_newDAO","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_supportsProposal","type":"bool"}],"name":"vote","outputs":[{"name":"_voteID","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getMyReward","outputs":[{"name":"_success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"rewardToken","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFromWithoutReward","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_proposalDeposit","type":"uint256"}],"name":"changeProposalDeposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"blocked","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"curator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"uint256"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_transactionData","type":"bytes"}],"name":"checkProposalCode","outputs":[{"name":"_codeChecksOut","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"privateCreation","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_curator","type":"address"},{"name":"_daoCreator","type":"address"},{"name":"_proposalDeposit","type":"uint256"},{"name":"_minTokensToCreate","type":"uint256"},{"name":"_closingTime","type":"uint256"},{"name":"_privateCreation","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"FuelingToDate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"CreatedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"newCurator","type":"bool"},{"indexed":false,"name":"description","type":"string"}],"name":"ProposalAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"position","type":"bool"},{"indexed":true,"name":"voter","type":"address"}],"name":"Voted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalID","type":"uint256"},{"indexed":false,"name":"result","type":"bool"},{"indexed":false,"name":"quorum","type":"uint256"}],"name":"ProposalTallied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_newCurator","type":"address"}],"name":"NewCurator","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"_allowed","type":"bool"}],"name":"AllowedRecipientChanged","type":"event"}];
// mainnet
var address = '0xbb9bc244d798123fde783fcc1c72d3bb8c189413';
// testnet
// var address = '0x055343f7690a15e1b60107a9ed12781e47cd94a5';
var instance = web3.eth.contract(abi).at(address);

// sendEther();

// newProposal();

// lookAtProposals();

lookAtAllEvents();

function lookAtAllEvents() {
  // Transfer(address,address,uint256) ==> 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
  // Approval(address,address,uint256) ==> 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925
  // FuelingToDate(uint256) ==> 0xf381a3e2428fdda36615919e8d9c35878d9eb0cf85ac6edf575088e80e4c147e
  // CreatedToken(address,uint256) ==> 0xdbccb92686efceafb9bb7e0394df7f58f71b954061b81afb57109bf247d3d75a
  // Refund(address,uint256) ==> 0xbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d
  // ProposalAdded(uint256,address,uint256,bool,string) ==> 0x5790de2c279e58269b93b12828f56fd5f2bc8ad15e61ce08572585c81a38756f
  // Voted(uint256,bool,address) ==> 0x86abfce99b7dd908bec0169288797f85049ec73cbe046ed9de818fab3a497ae0
  // ProposalTallied(uint256,bool,uint256) ==> 0xdfc78bdca8e3e0b18c16c5c99323c6cb9eb5e00afde190b4e7273f5158702b07
  // NewCurator(address) ==> 0x9046fefd66f538ab35263248a44217dcb70e2eb2cd136629e141b8b8f9f03b60
  // AllowedRecipientChanged(address,bool) ==> 0x73ad2a153c8b67991df9459024950b318a609782cee8c7eeda47b905f9baa91f

  var decoders = new Decoders(abi);

  var filter = web3.eth.filter({
    address: address,
    fromBlock: 1200000,
    topics: ['0xdbccb92686efceafb9bb7e0394df7f58f71b954061b81afb57109bf247d3d75a']
  });

  filter.get(function(err, results) {
    if (err) handleError(err);
    results.forEach(function(log) {
      var decoded = decoders.decode(log, abi);
      console.log(decoded.event);
      console.log(decoded.args);
      console.log('====');
    });
  });  
}

function Decoders(abi) {
  var decoderList = abi.filter(function (json) {
      return json.type === 'event';
  }).map(function(json) {
      return new SolidityEvent(null, json, null);
  });

  var decoderMapping = {};

  decoderList.forEach(function(decoder) {    
    decoderMapping[decoder.signature()] = decoder;
  });

  this.decode = function(log) {
    var signature = log.topics[0].replace("0x","");
    var decoder = decoderMapping[signature];
    return decoder.decode(log);
  }
}

function sendEther() {
  web3.eth.sendTransaction({to: address, value: 40000}, function(err, txHash) {
    if (err) handleError(err);
    console.log('ether tx sent, waiting for mining...');
    var interval = setInterval(function() {
      web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
        if (err) handleError(err);
        if (receipt) {
          console.log('ether tx processed');
          clearInterval(interval);
        }
      });
    }, 1000);
  });
}

function newProposal() {
  var recipient = web3.eth.defaultAccount;
  var amount = 0;
  var description = '🐒🐒🐒';
  var txData = "beefcafe";
  var debatingPeriod = 14*24*60*60;
  var newCurator = false;

  instance.newProposal(recipient, amount, description, txData, debatingPeriod, newCurator , {gas: 2000000}, function(err, txHash) {
    if (err) handleError(err);
    console.log('newProposal tx sent, waiting for mining...');
    var interval = setInterval(function() {
      web3.eth.getTransactionReceipt(txHash, function(err, receipt) {
        if (err) handleError(err);
        if (receipt) {
          console.log('newProposal processed');
          clearInterval(interval);
        }
      });
    }, 1000);
  });
}

function lookAtProposals() {
  var numProposals = parseInt(instance.numberOfProposals());
  var passCount = 0;

  // proposals[n]
  // outputs: 
  //0  [ { name: 'recipient', type: 'address' },
  //1    { name: 'amount', type: 'uint256' },
  //2    { name: 'description', type: 'string' },
  //3    { name: 'votingDeadline', type: 'uint256' },
  //4    { name: 'open', type: 'bool' },
  //5    { name: 'proposalPassed', type: 'bool' },
  //6    { name: 'proposalHash', type: 'bytes32' },
  //7    { name: 'proposalDeposit', type: 'uint256' },
  //8    { name: 'newCurator', type: 'bool' },
  //9    { name: 'yea', type: 'uint256' },
  //10   { name: 'nay', type: 'uint256' },
  //11   { name: 'creator', type: 'address' } ],

  for (var i = 1; i <= numProposals; i++) {
    var rawData = instance.proposals(i);
    if (rawData[5]) passCount++;
    console.log('---------------');
    console.log(rawData[2]);
    console.log(rawData[6]);
  }

  console.log('Current proposal count: ', numProposals);
  console.log('Passed proposal count', passCount);
}

function handleError(msg) {
  console.error(msg);
  process.exit(1);
}