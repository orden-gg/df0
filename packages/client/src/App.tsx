import WebGPU from "three/addons/capabilities/WebGPU.js";
import CanvasWebGPU from "./game/CanvasWebGPU";
import { CoordsWorkshop } from "./CoordsWorkshop";
// import { useComponentValue } from "@latticexyz/react";
// import { useMUD } from "./MUDContext";

export const App = () => {
  // const {
  //   components: { Counter },
  //   systemCalls: { increment },
  //   network: { singletonEntity },
  // } = useMUD();

  // const counter = useComponentValue(Counter, singletonEntity);

  if (WebGPU.isAvailable() === false) {
    document.body.appendChild(WebGPU.getErrorMessage());
    throw new Error("No WebGPU support");
  }

  return (
    <>
      <CoordsWorkshop />
      <CanvasWebGPU />
    </>
  );
};
