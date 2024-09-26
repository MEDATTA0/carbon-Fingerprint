import React from "react";

const Input = (placeHolder, action) => {
  return (
    <div>
      <input type="text" placeholder={placeHolder} onChange={action} />
    </div>
  );
};

export default Input;
