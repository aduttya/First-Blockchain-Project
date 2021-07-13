const {web3,myAccount} = require('./utils');
const {abi,address} = require('./artifacts');

let contract = new web3.eth.Contract(abi,address)
//console.log(address)
async function get(){
     let r = await contract.methods.get().call()
     return r;
 }
 async function Increment(){
     let r = await contract.methods.Increment().send({
         from : myAccount.address,
         gas : 80000
     })

    }


window.addEventListener('load', () =>{
    document.getElementById("get").onclick = () =>{
        get().then((r) =>{
            document.getElementById("resultofget").innerHTML = r
        })
    }

    document.getElementById("set").onclick = ()=>{
        val = document.getElementById("value").value
        Increment().then((r) =>{
            document.getElementById("resultofset").innerHTML = r
        })
    }
})