import React from "react";
import useTyping from "../hooks/use-typing";

import "./../assets/styles/Typing.scss";

const Typing = ({ titles }) => {
  const { typedValue, phases, text } = useTyping(titles);

  return (
    <span
      className={`type ${phases !== "DELETING" ? "blink" : null}`}
      aria-label={text}
    >
      {typedValue}
    </span>
  );
};

export default Typing;
