import React from "react";

const Input = ({ placeholder, style, onKeyDown }, ref) => {
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
    ></input>
  );
};

const ForwardedInput = React.forwardRef(Input);
export default ForwardedInput;
