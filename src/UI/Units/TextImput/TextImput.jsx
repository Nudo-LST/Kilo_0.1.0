import React, { useRef } from "react";
import k from "./TextImput.module.css";

export default function TextImput(props) {
  let klabel = useRef("");

  let changes = (e) => {
    debugger;
  };

  return (
    <div className={`${k.wrapper}`}>
      <input
        onChange={(e) => {
          changes(e);
        }}
        type={props.type}
        placeholder=" "
      />
      <label ref={klabel}>
        {props.placeholder ? props.placeholder : "Label"}
      </label>
    </div>
  );
}
