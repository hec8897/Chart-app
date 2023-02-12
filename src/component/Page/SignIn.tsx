import { LayoutContainer } from "component/template";
import { Input, Flex, Button } from "component/UI";

const SignIn = () => {
  return (
    <LayoutContainer>
      <div className="py-[20%]">
        <div className="max-w-[600px] m-auto">
          <Flex $col gap={2}>
            <h1 className="text-center text-xl font-bold mb-2">로그인</h1>
            <Input name="uid" placeholder="user id" />
            <Input type="password" name="upw" placeholder="password" />
            <Button value="User Login" />
          </Flex>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default SignIn;
