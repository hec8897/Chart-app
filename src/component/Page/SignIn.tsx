import { LayoutContainer } from "component/template";
import { Input, Flex } from "component/UI";

const SignIn = () => {
  return (
    <LayoutContainer>
      <div className="py-[20%]">
        <Flex $col gap={2}>
          <Input />
          <Input />
        </Flex>
      </div>
    </LayoutContainer>
  );
};

export default SignIn;
