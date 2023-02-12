import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

interface IStyle {
  $col?: boolean;
  gap?: number;
}

interface IProps extends IStyle {
  children: ReactNode;
}

const FlexStyle = tw.div<IStyle>`
    flex
    ${(props) => props.$col && "flex-col"}
    ${(props) => props.gap && `gap-${props.gap}`}
`;

const Flex = ({ children, $col, gap }: IProps) => (
  <FlexStyle {...{ $col, gap }}>{children}</FlexStyle>
);

export default Flex;
