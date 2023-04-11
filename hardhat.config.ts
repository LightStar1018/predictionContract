import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require(`dotenv`).config();

const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: 'J2YQYURE9T3P4YYI71EZQSU9F4V1Y3H1P4'
  },
  networks: {
    arbiscan: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

export default config;
