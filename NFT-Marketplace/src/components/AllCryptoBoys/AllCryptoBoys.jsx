import React, { useState, useEffect } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import CryptoBoyNFTDetails from "../CryptoBoyNFTDetails/CryptoBoyNFTDetails";
import Loading from "../Loading/Loading";
import image from './nftimage'
import styled from "styled-components";
import icon from "./favicon.ico";

const AllCryptoBoys = ({
  cryptoBoys,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoBoy,
}) => {
  const [loading, setLoading] = useState(true);

  const NavHomeButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  background-color: #2d6145;
  border: none;
  font-size: 15px;
  width: 100px;
  color: white;
  `
  // useEffect(() => {
  //   if (cryptoBoys.length !== 0) {
  //     if (cryptoBoys[0].metaData !== undefined) {
  //       setLoading(true);
  //     } else {
  //       setLoading(true);
  //     }
  //   }
  // }, [cryptoBoys]);
  
 console.log("length",cryptoBoys.length)
  return (
    <div>
      <div className="nav-bar">
        <div className="card-body align-items-center d-flex container flex-wrap justify-content-center">
          <h1 className="flex-grow-1">
            NFT Marketplace
          </h1>
          <div className="nft-marketplace-btn flex-wrap">
          <button className="auction-btn">Auction</button>
          <button className="market-btn">Market</button>
          <button className="sellnft-btn">Sell NFT</button>
          <NavHomeButton> <a href="https://fomobaby.app/" style={{color:"white"}}>Home</a> </NavHomeButton>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap mb-2 parant-nft-boys" style={{backgroundColor:"violet"}}>
        {cryptoBoys.map((cryptoboy) => {
          return (
            <div className="nft-boys">
              <img className="nftimages" src={image[cryptoBoys.indexOf(cryptoboy)]} alt="nftfomo"/>
                {/* <CryptoBoyNFTImage
                  colors={
                    cryptoboy.metaData !== undefined
                      ? cryptoboy.metaData.metaData.colors
                      : ""
                  }
                /> */}
             
              <CryptoBoyNFTDetails
                cryptoboy={cryptoboy}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoBoy={buyCryptoBoy}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoBoys;
