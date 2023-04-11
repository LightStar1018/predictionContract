import { ethers } from "hardhat";
import { MOCH__factory, PredictionMarket__factory } from "../typechain-types";

require(`dotenv`).config();

const { 
  ADMIN_ADDRESS, 
  OPERATOR_ADDRESS, 
  MIN_BET_AMOUNT, 
  TREASURY_FEE 
} = process.env;

async function main() {
  const MochContract: MOCH__factory = await ethers.getContractFactory("MOCH");
  const PredictionMarketContract: PredictionMarket__factory = await ethers.getContractFactory("PredictionMarket");

  const Moch = await MochContract.deploy();
  await Moch.deployed();

  const PredictionMarket = await PredictionMarketContract.deploy(
    Moch.address, 
    ADMIN_ADDRESS, 
    OPERATOR_ADDRESS, 
    MIN_BET_AMOUNT, 
    TREASURY_FEE
  );
  await PredictionMarket.deployed();

  console.log(
    `Deployed MOCH Address is ${Moch.address} and PredictionMarket Address is ${PredictionMarket.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});