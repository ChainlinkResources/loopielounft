const LoopieLouNFT = artifacts.require("LoopieLouNFT"); // Change this to what your Contract Name is in Solidity

module.exports = function (deployer) {
  deployer.deploy(LoopieLouNFT, "Loopie Lou", "WOOF", "https://"); //
};
