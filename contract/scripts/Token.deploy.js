const { ethers } = require('hardhat')
require("dotenv").config();


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const TOKEN = await hre.ethers.getContractFactory('SVToken')
  const token = await TOKEN.deploy()
  await token.deployed()
  console.log('token deployed to:', token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
