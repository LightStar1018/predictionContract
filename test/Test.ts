// import { expect } from 'chai';
// import { ethers } from 'hardhat';
// import { Test__factory } from '../typechain-types';
// import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

// describe('Test test contract', function () {

//   async function deployTestContract() {
//     const [owner, otherAccount] = await ethers.getSigners();
//     const TestContract: Test__factory = await ethers.getContractFactory('Test');
//     const testContract = await TestContract.deploy();
//     return { contract: testContract, owner };
//   }

//   it("Should test method return correct value", async () => {
//     const { contract } = await loadFixture(deployTestContract);
//     console.log(await contract.test())
//   })

//   it('test Max value', async() => {
//     const { contract } = await loadFixture(deployTestContract);
//     console.log(await contract.testMax());
//   })
// })