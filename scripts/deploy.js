const { utils } = require("ethers");

async function main() {
   

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
    Token = await TOKENS.deploy("","");
    await Token.deployed();
    const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });