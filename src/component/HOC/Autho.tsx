import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { useStorage } from "hooks";
import { authoState } from "store/autho";
import { useSetRecoilState } from "recoil";

const Autho = ({ children }: { children: ReactNode }) => {
  const { getSession } = useStorage();
  const { push, replace } = useRouter();
  const setValue = useSetRecoilState(authoState);

  useEffect(() => {
    const autho: { name: string; uid: string } = getSession("autho");
    if (autho) {
      setValue({ name: autho.name, uid: autho.uid });
      push("/");
    } else {
      replace("/signin");
    }
  }, []);

  return <>{children}</>;
};
export default Autho;
