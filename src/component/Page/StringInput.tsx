import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "component/UI";

interface IProps {
  title?: string;
  placeholder?: string;
  message?: string;
  name: string;
  type?: "text" | "password";
}

const REGISTER_OPTION = {
  minLength: 1,
  required: true,
  pattern: /^[a-zA-Z/ㄱ-힣/0-9-_/,.][a-zA-Z/ㄱ-힣/0-9-_/,. ]*$/,
};

const StringInput = (Props: IProps) => {
  const { register } = useFormContext();
  return (
    <Input
      {...Props}
      register={register(Props.name, {
        ...REGISTER_OPTION,
        required: "Please check your ID",
      })}
    />
  );
};

export default StringInput;
