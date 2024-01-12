import { ethers } from "hardhat";

async function main(address: string) {
  try {
    let contract = await ethers.getContractAt("Token", address);

    let tx = await contract.pause();
    await tx.wait();

    console.log("Paused");
  } catch (error) {
    console.log(error);
  }
}
