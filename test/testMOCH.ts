import { ethers } from "hardhat"
import { MOCH__factory } from "../typechain-types"
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers"
import { expect } from "chai"

describe("test MOCH token", () => {
  const deployTokenContract = async() => {
    const MOCHToken: MOCH__factory = await ethers.getContractFactory('MOCH')
    const [owner, otherAccount] = await ethers.getSigners()
    const contract = await MOCHToken.deploy()

    return { owner, contract }
  }

  it('test deploy token contract', async () => {
    const { contract } = await loadFixture(deployTokenContract);
    console.log(contract.address)
  })
})