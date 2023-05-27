import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldContract, worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Space }: ClientComponents
) {
  const getSpaceType = (x: number, y: number) => {
    return worldSend("getSpaceType", [x, y]);
    // return await worldContract.callStatic.getSpaceType(x, y);
  };

  return { getSpaceType };
}
