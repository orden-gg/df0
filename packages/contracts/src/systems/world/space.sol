// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Perlin } from "@latticexyz/noise/contracts/Perlin.sol";
import { ABDKMath64x64 as Math } from "abdk-libraries-solidity/ABDKMath64x64.sol";

int128 constant _0_45 = 8301034833169298227; // 0.45 * 2**64
int128 constant _0_8 = 14757395258967641292; // 0.8 * 2**64

uint256 constant NEBULA = uint256(keccak256("space.Nebula"));
uint256 constant SPACE = uint256(keccak256("space.Space"));
uint256 constant DEEP_SPACE = uint256(keccak256("space.DeepSpace"));

library SpaceLibrary {
  function getSpaceType(int256 x, int256 y) internal pure returns (uint256) {
    int128 perlinNoise = Perlin.noise2d(x, y, 400, 64);

    // 20% Deep Space
    // 35% Space
    // 45% Nebula
    if (perlinNoise >= _0_8) {
      return DEEP_SPACE;
    } else if (perlinNoise >= _0_45 && perlinNoise < _0_8) {
      return SPACE;
    } else {
      return NEBULA;
    }
  }
}
