# NFT MarketPlace

# 1 User create an NFT (using ERC721)
  function mintNFT(string memory _name, string memory _tokenURI, uint256 _price, string[] calldata _colors) external

# User list their created NFT on the marketplace for Sale for a specefic time 

# Another User mint the NFT 
function mint(uint256 amount) public payable

# User check their Balance of NFT in their wallet 
 function ownerOf(address _owner) public view returns(uint256)

# User Change Tokenprice 
function changeTokenPrice(uint256 _tokenId, uint256 _newPrice) public 
