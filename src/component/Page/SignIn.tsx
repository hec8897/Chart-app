import { useCallback } from "react";
import { LayoutContainer } from "component/template";
import { Input, Flex, SubmitButton } from "component/UI";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Autho>({
    defaultValues: {
      uid: "",
      password: "",
    },
  });

  const onSubmit = useCallback((data: Autho) => {
    console.log(data);
  }, []);

  return (
    <LayoutContainer>
      <form
        className="max-w-[600px] m-auto py-[20%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex $col>
          <h1 className="text-center text-xl font-bold mb-2">Chart-app</h1>
          <Input
            title="User Id"
            placeholder="user id"
            message={errors.uid?.message}
            register={register("uid", {
              ...REGISTER_OPTION,
              required: "Please check your ID",
            })}
          />
          <Input
            title="User Password"
            type="password"
            placeholder="password"
            message={errors.password?.message}
            register={register("password", {
              ...REGISTER_OPTION,
              required: "Please check your Password",
            })}
          />
          <SubmitButton value="User Login" $active={isValid} />
        </Flex>
      </form>
    </LayoutContainer>
  );
};

export default SignIn;
