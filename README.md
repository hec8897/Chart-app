# react-module-playground

리엑트에서 많이 사용하는 모듈 play ground

## Getting Started

```bash
yarn set version berry

yarn dev
```

---

## react-hook-form

https://react-hook-form.com

### 기본 사용법

```tsx
const {
  register,
  handleSubmit,
  formState: {
    isValid, // values 가 유효할 경우 true
    errors,
  },
} = useForm<Autho>({
  defaultValues: {
    uid: "",
  },
});

const onSubmit = (data: Autho) => {
  console.log(data);
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input register={register("uid")} />
  </form>
);
```

### Input 컴포넌트 분리 시

```tsx
const FormInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { register, type } = props;
  return (
    <InputStyle ref={ref} {...{ ...register, type: type ? type : "text" }} />
  );
});

FormInput.displayName = "FormInput"; // lint 에러 방지
```

---

## recoil

### 기본 설정

```tsx
// _app.tsx

import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>...</RecoilRoot>;
}
```

```tsx
// store/autho.ts

import { atom } from "recoil";

export const authoState = atom({
  key: "autho",
  default: {
    uid: "",
    name: "",
  },
});
```

### Atoms

#### useRecoilValue

```tsx
import { useRecoilValue } from "recoil";

const value = useRecoilValue(authoState);
```

#### useSetRecoilState

```tsx
import { useSetRecoilState } from "recoil";

const setValue = useSetRecoilState(authoState);
```

#### useRecoilState

```tsx
import { useRecoilState } from "recoil";

const [state, setState] = useRecoilState(todoListState);
```

---

## react-query

## reChart
