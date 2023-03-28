import { useCallback } from "react";
import { LayoutContainer } from "component/template";
import { Flex, SubmitButton } from "component/UI";
import { useForm, FormProvider } from "react-hook-form";
import { useRequest } from "hooks";
import { useRecoilValue } from "recoil";
import { authoState } from "store/autho";
import StringInput from "./StringInput";

interface Autho {
  uid: string;
  password: string;
}

const REGISTER_OPTION = {
  minLength: 1,
  required: true,
  pattern: /^[a-zA-Z/ㄱ-힣/0-9-_/,.][a-zA-Z/ㄱ-힣/0-9-_/,. ]*$/,
};

const SignIn = () => {
  const { postAutho } = useRequest();
  const methods = useForm<Autho>({
    defaultValues: {
      uid: "test-id",
      password: "123",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = methods;

  const onSubmit = useCallback((data: Autho) => postAutho(data), [postAutho]);
  const value = useRecoilValue(authoState);

  return (
    <LayoutContainer>
      {value.name}
      <FormProvider {...methods}>
        <form
          className="max-w-[600px] m-auto py-[20%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex $col>
            <h1 className="text-center text-xl font-bold mb-2">Chart-app</h1>
            <StringInput
              name="uid"
              title="User Id"
              placeholder="user id"
              message={errors.uid?.message}
            />
            <StringInput
              name="password"
              title="User Password"
              type="password"
              placeholder="password"
              message={errors.password?.message}
            />
            <SubmitButton value="User Login" $active={isValid} />
          </Flex>
        </form>
      </FormProvider>
    </LayoutContainer>
  );
};

export default SignIn;
