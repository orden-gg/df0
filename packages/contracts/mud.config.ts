import { mudConfig } from "@latticexyz/world/register";

/**
 * Importing this enables "snap sync mode".
 * It allows clients to sync the latest state of the world using view functions.
 * This is a simple way to quickly sync without the use of an external indexer.
 * This could lead to expensive queries on live RPCs if the world is large,
 * so we suggest using MODE for production deployments.
 */
// import "@latticexyz/world/snapsync";
// import { resolveTableId } from "@latticexyz/config";

export default mudConfig({
  // snapSync: true,
  enums: {
    BiomeType: ["VOID", "OCEAN", "FOREST", "DESERT"],
    PlanetSize: ["VOID", "DWARF", "GIANT", "SUPER_GIANT"],
    SpaceType: ["VOID", "NEBULA", "SPACE", "DEEP_SPACE"],
  },
  tables: {
    Position: {
      schema: {
        x: "int256",
        y: "int256",
      },
      storeArgument: true,
    },
    Space: "SpaceType",
    Planet: {
      schema: {
        biome: "BiomeType",
        size: "PlanetSize",
      },
    },
  },
  // modules: [
  //   {
  //     name: "KeysWithValueModule",
  //     root: true,
  //     args: [resolveTableId("Planet")],
  //   },
  // ],
});
