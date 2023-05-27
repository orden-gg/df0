// import { useComponentValue } from "@latticexyz/react";
import { useState } from "react";
import { useMUD } from "./MUDContext";

export const CoordsWorkshop = () => {
  const {
    components: {},
    systemCalls: { getSpaceType },
    network: { singletonEntity, worldSend },
  } = useMUD();
  const [x_val, set_x_val] = useState<number>(0);
  const [y_val, set_y_val] = useState<number>(0);

  // const counter = useComponentValue(Counter, singletonEntity);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "aliceblue",
        color: "gray",
        padding: "12px",
        zIndex: 1000,
      }}
    >
      <label htmlFor="inp_x">
        x:{" "}
        <input
          id="inp_x"
          type="text"
          value={x_val}
          onChange={() => set_x_val(Number(event?.target.value))}
        />{" "}
      </label>
      <label htmlFor="inp_y">
        y:{" "}
        <input
          id="inp_y"
          type="text"
          value={y_val}
          onChange={() => set_y_val(Number(event?.target.value))}
        />{" "}
      </label>
      <button
        type="button"
        onClick={async () => {
          const tx = await worldSend("getSpaceType", [x_val, y_val]);

          console.log("tx", tx);
          console.log("result", await tx.wait());
        }}
        style={{
          display: "block",
          margin: "12px auto 0",
        }}
      >
        check_coords
      </button>
    </div>
  );
};
