import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TextInput } from "../../components/TextInput/Textinput";
import { MINUS, PLUS } from "../../Utils/constants";
import "./Counter.css";

export const Counter = (props) => {
  const [count, setCount] = useState(1);

  const onCounterChange = (type) => {
    type === PLUS
      ? setCount((count) => (count > 999 ? 1000 : count + 1))
      : setCount((count) => (count < 2 ? 1 : count - 1));
  };
  return (
    <div className="Counter">
      <div className="minus" onClick={() => onCounterChange(MINUS)}>
        <AiOutlineMinus color="#B24242" size={21} />
      </div>
      <TextInput
        type="numeric"
        count={count}
        maxValue={1000}
        onValueChange={(val) => (val === 0 ? setCount(1) : setCount(val))}
      />
      <div className="plus" onClick={() => onCounterChange(PLUS)}>
        <AiOutlinePlus color="white" size={21} fontWeight="bold" />
      </div>
    </div>
  );
};
