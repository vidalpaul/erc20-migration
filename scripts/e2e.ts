import { ethers } from "hardhat";

async function deploy(network: "sepolia" | "mumbai") {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("Token");

  await token.waitForDeployment();

  console.log(`Token deployed to ${token.target}`);

  return token.target as string;
}

async function pause(address: string) {
  try {
    let contract = await ethers.getContractAt("Token", address);

    let tx = await contract.pause();
    await tx.wait();

    console.log("Paused");
  } catch (error) {
    console.log(error);
  }
}

async function unpause(address: string) {
  try {
    let contract = await ethers.getContractAt("Token", address);

    let tx = await contract.unpause();
    await tx.wait();

    console.log("Unpaused");
  } catch (error) {
    console.log(error);
  }
  console.log("Unpaused");
}

async function simulateERC20Transfers() {}

// TODO: fix this
async function migrate() {
  console.log("Migrating");

  const token = await ethers.deployContract("Token");

  await token.waitForDeployment();

  console.log(`Token deployed to ${token.target}`);

  return token.target as string;
}

async function main() {
  console.log("Starting e2e simulation");
  const tokenAddress = await deploy();
  await unpause(tokenAddress);
  await simulateERC20Transfers();
  await pause(tokenAddress);
  const tokenAddress2 = await migrate();
  await unpause(tokenAddress2);
  console.log("Finished e2e simulation");
}
