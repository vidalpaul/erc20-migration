# ERC20 Token Migration Exercise

This exercise is designed to help you understand how to migrate an ERC20 token from one EVM compatible blockchain to another. This is a common pattern for projects that want to move from one blockchain to another, or to support multiple blockchains.

## Background

ERC20 tokens are a standard interface for fungible tokens on Ethereum. They are used by many projects to represent a tokenized asset, such as a stablecoin, or a governance token. The ERC20 standard defines a set of functions that a token contract must implement, such as `transfer`, `balanceOf`, and `approve`. This allows other contracts to interact with the token in a standard way.

The ERC20 standard does not define how the token is implemented, only the interface. This means that the token can be implemented in any way that the developer chooses. For example, the token could be implemented as a simple balance sheet, or it could be implemented as a more complex contract that allows for things like staking, or governance.

## Exercise

In this exercise, you will be migrating an ERC20 token from Holesky to Mumbai.

### Step 1: Deploy the token on Holesky

First, you will deploy the token on Holesky.You can use the following command to deploy the token:

```bash
npx hardhat deploy --network holesky
```

### Step 2: Initialize the token

Next, you will initialize the token. You can use the following command to initialize the token:

```bash
npx hardhat initialize --address <address> --network holesky
```

### Step 3: Interact with the token

Next, you will interact with the token. Minting, burning, and transferring tokens.

### Step 4: Pause the token

Next, you will pause the token. You can use the following command to pause the token:

```bash
npx hardhat pause --address <address> --network holesky
```

### Step 5: Deploy the token on Mumbai

Next, you will deploy the token on Mumbai. You can use the following command to deploy the token:

```bash
npx hardhat deploy --network mumbai
```

### Step 6: Migrate token balances

Finally, you will migrate the token from Holesky to Mumbai. You can use the following command to migrate the token:

```bash
npx hardhat migrate --from holesky --to mumbai
```

## Resources

- [ERC20 Token Standard](https://eips.ethereum.org/EIPS/eip-20)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Holesky Documentation](https://holesky.dev/)
- [Mumbai](https://mumbai.polygonscan.com/)
