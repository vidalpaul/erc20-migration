// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20Pausable, Ownable {
    uint256 private constant INITIAL_SUPPLY = 10000 * 10 ** 18; // Assuming 18 decimal places

    constructor(
        string memory name,
        string memory symbol
    ) ERC20("MyToken", "MTKN") {
        _mint(msg.sender, INITIAL_SUPPLY);
        _pause();
s    }
}
