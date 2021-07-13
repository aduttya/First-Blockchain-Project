pragma solidity >=0.4.0 <0.8.0;

contract mycontract{

    uint x = 0;

    function Increment()public payable{
        x++;}

    function get()public view returns(uint){
        return x;
    }
}