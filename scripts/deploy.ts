import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("Token");

  await token.waitForDeployment();

  console.log(`Token deployed to ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
