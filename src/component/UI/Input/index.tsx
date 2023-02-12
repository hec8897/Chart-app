import React, { forwardRef, ReactNode } from "react";
import tw from "tailwind-styled-components";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type?: "text" | "password";
  placeholder?: string;
  title?: string;
  message?: string;
  register?: UseFormRegisterReturn;
}

const InputStyle = tw.input`
  border-2 
  w-full 
  p-2 
  outline-none
  rounded-md
`;

const FormInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { type, placeholder, register, title, message } = props;
  return (
    <div className="mb-2">
      <span>{title}</span>
      <InputStyle
        ref={ref}
        {...{ ...register, placeholder, type: type ? type : "text" }}
        autoComplete="off"
      />
      <span className="text-sm text-red-500">{message}</span>
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
