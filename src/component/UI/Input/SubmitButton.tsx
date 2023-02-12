import React from "react";
import tw from "tailwind-styled-components";

interface IStyle {
  $active?: boolean;
}

interface IProps extends IStyle {
  value?: string;
}

const ButtonStyle = tw.input<IStyle>`
  border-2 
  w-full 
  p-2 
  outline-none
  rounded-md
  text-white
  ease-in duration-50
  active:translate-y-1
  ${(props) => (props.$active ? "bg-sky-400" : "bg-gray-300")}
`;

const SubmitButton = ({ value, $active }: IProps) => (
  <ButtonStyle $active={$active} type="submit" value={value ? value : "버튼"} />
);

export default SubmitButton;
