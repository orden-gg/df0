// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
import { System } from "@latticexyz/world/src/System.sol";
import { PositionData } from "../codegen/tables/Position.sol";

import { SpaceLibrary } from "./world/space.sol";

contract MapSystem is System {
  function distance(PositionData memory from, PositionData memory to) internal pure returns (int256) {
    int256 deltaX = from.x > to.x ? from.x - to.x : to.x - from.x;
    int256 deltaY = from.y > to.y ? from.y - to.y : to.y - from.y;
    return deltaX + deltaY;
  }

  function getSpaceType(int256 x, int256 y) public pure returns (uint256) {
      return SpaceLibrary.getSpaceType(x, y);
  }
}
