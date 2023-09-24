// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract book {
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[]   memos;
    address payable owner;
    constructor(){
        owner=payable(msg.sender);
    }
     
     function buybook(string memory name, string memory message) public payable  {
         require(msg.value>0,'not enough ethereum');
         owner.transfer(msg.value);
         memos.push(Memo(name,message,block.timestamp,msg.sender));
     }
     function getMemos() public view  returns(Memo[] memory){
         return memos;
     }

}