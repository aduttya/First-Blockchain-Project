const{web3,myAccount} = require('./utils');
const {bin,abi} = require('./artifacts');

async function deploy(){
  let r = await web3.eth.sendTransaction({
        from : myAccount.address,
        gas : 800000,
        data : bin    
    })
    console.log(r)
}

deploy()