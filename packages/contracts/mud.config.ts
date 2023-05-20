import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    BiomeType: ["VOID", "OCEAN", "FOREST", "DESERT"],
    PlanetSize: ["VOID", "DWARF", "GIANT", "SUPER_GIANT"],
    SpaceType: ["VOID", "NEBULA", "SPACE"],
  },
  tables: {
    Position: {
      schema: {
        x: "int32",
        y: "int32",
        z: "int32",
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
});
