const Web3 = require('web3');

const web3 = new Web3('http://localhost:8545');

const privatekey = "0x3f75172b05bdb15f5419725c6f88a5700a3f24aaa1a459f7fd1583f4b9143993";
const myAccount = web3.eth.accounts.wallet.add(privatekey);

module.exports = {
    web3 : web3,
    myAccount : myAccount
}