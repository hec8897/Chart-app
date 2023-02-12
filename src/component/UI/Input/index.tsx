import React from "react";
import tw from "tailwind-styled-components";

const InputStyle = tw.input`
  border-2 
  w-full 
  p-2 
  outline-none
  rounded-md
`;

const Input = () => <InputStyle type="text" />;

export default Input;
