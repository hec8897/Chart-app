import React from "react";
import tw from "tailwind-styled-components";

interface IProps {
  type?: "text" | "password";
  name?: string;
  placeholder?: string;
}

const InputStyle = tw.input`
  border-2 
  w-full 
  p-2 
  outline-none
  rounded-md
`;

const Input = ({ placeholder, name, type }: IProps) => (
  <InputStyle
    type={type ? type : "text"}
    {...{ placeholder, name }}
    autoComplete="off"
  />
);

export default Input;
