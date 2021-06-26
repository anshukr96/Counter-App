import React from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const { maxValue, onValueChange, type, count } = props;
  return (
    <div className="Input">
      <input
        type={type}
        value={count}
        onChange={(val) =>
          +val?.target?.value > maxValue
            ? onValueChange(1000)
            : onValueChange(+val?.target?.value)
        }
      />
    </div>
  );
};
