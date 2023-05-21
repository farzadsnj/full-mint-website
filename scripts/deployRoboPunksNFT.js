const hre = require("hardhat");
const ethers = require('ethers')

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  await roboPunksNFT.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${roboPunksNFT.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
