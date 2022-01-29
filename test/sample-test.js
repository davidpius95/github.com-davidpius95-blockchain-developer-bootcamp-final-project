// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Greeter", async () => {
//   let TOKENS;
//   let tokenFactory;
//   let newERC20Token;
//   let Token;
//   let ERC20Address;
//   let owner;
//   let addr1;
//   let addr2;
//   [owner, addr1, addr2] = await ethers.getSigners();
//   // depoy factory contract
//   TOKENS = await hre.ethers.getContractFactory("FractionalBricks");
//   Token = await TOKENS.deploy("","");
//   await Token.deployed();
//   const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";



  // let symbole = await Token.symbol();
  // await symbole.wait();
  // console.log("10 NFTs have been reserved",symbole);

  // // Mint 3 NFTs by sending 0.03 ether
  // txn = await Token.mints(3, { value: utils.parseEther('0.03') });
  // await txn.wait()

  // // Get all token IDs of the owner
  // let tokens = await Token.walletOfOwner(owner.address)
  // console.log("Owner has tokens: ", tokens);
//});


const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

// require('chai').use(require('chai-as-promised')).should()

describe("tokenFactory", () => {
    let Factory;
    let token;
    let newERC20Token;
    let Token;
    let ERC20Address;
    let owner;
    let addr1;
    let addr2;
    beforeEach("deploy contract", async () => {
        [owner, addr1, addr2] = await ethers.getSigners();
        // depoy factory contract
        Token = await hre.ethers.getContractFactory("FractionalBricks");
        token = await Token.deploy();
        await token.deployed();
        console.log("tokenFactory deployed to:", token.address)


        // let cap = ethers.utils.parseEther("7")
        // let ERC20Token = await tokenFactory.deployNewERC20Token(
        //     "Fluid Token",
        //     "FLD",
        //     true,
        //     true,
        //     true,
        //     cap
        // );
        // // console.log("ERC20Token newAddress", ERC20Token);
        // Token = await ERC20Token.wait();
        // ERC20Address = Token.logs[0].address;
        // console.log("ERC20Token newAddress", ERC20Address);

        // const MyToken = await hre.ethers.getContractFactory("Tokens");
        // newERC20Token = await MyToken.attach(ERC20Address);
    });
  });
