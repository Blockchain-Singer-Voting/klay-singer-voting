const { ethers, upgrades } = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // deploy
  const CONTRACT = await hre.ethers.getContractFactory("SingerVoting");
  const contract = await CONTRACT.deploy("1690175243", "1695532043", "https://raw.githubusercontent.com/App-Voting/Singer-Voting/main/blockchain");
  await contract.deployed();
  console.log("contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
