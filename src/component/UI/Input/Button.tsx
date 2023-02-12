import React from "react";
import tw from "tailwind-styled-components";

interface IProps {
  value?: string;
}

const ButtonStyle = tw.input`
  border-2 
  w-full 
  p-2 
  outline-none
  rounded-md
  bg-sky-600	
  text-white
  ease-in duration-50
  active:translate-y-1
`;

const Button = ({ value }: IProps) => (
  <ButtonStyle type="submit" value={value ? value : "버튼"} />
);

export default Button;
