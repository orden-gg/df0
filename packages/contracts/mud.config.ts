import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    SpaceType: ["Void", "Nebula", "Space"],
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
  },
});
