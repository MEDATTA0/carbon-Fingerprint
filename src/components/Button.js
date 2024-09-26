import React from "react";

const Button = ({ text, color, fn }) => {
  //   const isFunction = typeof fn === "function";
  return (
    <div>
      <button
        style={{ backgroundColor: `${color}` }}
        // {...(isFunction ? (onclick = { fn }) : <fn />)}
        alt={text}
        onClick={() => fn}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
