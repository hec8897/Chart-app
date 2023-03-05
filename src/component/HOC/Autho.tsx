import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { useStorage } from "hooks";
import { authoState } from "store/autho";
import { useRecoilState } from "recoil";

const Autho = ({ children }: { children: ReactNode }) => {
  const { getSession } = useStorage();
  const { push, replace } = useRouter();
  const [value, setValue] = useRecoilState(authoState);

  useEffect(() => {
    const autho: { name: string; uid: string } = getSession("autho");
    if (autho) {
      setValue({ name: autho.name, uid: autho.uid, login: true });
      push("/");
    } else {
      replace("/signin");
    }
  }, []);

  return <>{value.login && children}</>;
};
export default Autho;
