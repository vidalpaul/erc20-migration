import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-etherscan-abi";
import "hardhat-gas-reporter";

const ACCOUNTS_FROM_ENV_MNEMONIC = {
  mnemonic: process.env.MNEMONIC ?? "",
};

const config: HardhatUserConfig = {
  solidity: "0.8.22",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: ACCOUNTS_FROM_ENV_MNEMONIC,
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: ACCOUNTS_FROM_ENV_MNEMONIC,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
  },
};

export default config;
