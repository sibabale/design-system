import React from "react";

function LightMode({ backgrounColor }) {
  return (
    <svg
      fill={backgrounColor}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
    >
      <path d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34zM2 25.5v-3h8v3zm36 0v-3h8v3zM22.5 10V2h3v8zm0 36v-8h3v8zm-9.45-30.85L8.1 10.2l2.1-2.1 4.95 4.95zM37.8 39.9l-4.95-4.95 2.1-2.1 4.95 4.95zm-2.85-24.75l-2.1-2.1L37.8 8.1l2.1 2.1zM10.2 39.9l-2.1-2.1 4.95-4.95 2.1 2.1zM24 24z"></path>
    </svg>
  );
}

export default LightMode;
