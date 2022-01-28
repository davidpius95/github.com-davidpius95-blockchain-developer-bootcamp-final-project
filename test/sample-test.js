const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", async () => {
  let TOKENS;
  let tokenFactory;
  let newERC20Token;
  let Token;
  let ERC20Address;
  let owner;
  let addr1;
  let addr2;
  [owner, addr1, addr2] = await ethers.getSigners();
  // depoy factory contract
  TOKENS = await hre.ethers.getContractFactory("FractionalBricks");
  Token = await TOKENS.deploy();
  await Token.deployed();
  const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";



  let symbole = await Token.symbol();
  await symbole.wait();
  console.log("10 NFTs have been reserved",symbole);

  // Mint 3 NFTs by sending 0.03 ether
  txn = await Token.mints(3, { value: utils.parseEther('0.03') });
  await txn.wait()

  // Get all token IDs of the owner
  let tokens = await Token.walletOfOwner(owner.address)
  console.log("Owner has tokens: ", tokens);
});
