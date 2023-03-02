import { useCallback } from "react";
import axios from "axios";
import { authoState } from "store/autho";
import { useSetRecoilState } from "recoil";
import useStorage from "./useStorage";
import { useRouter } from "next/router";

const useRequest = () => {
  const { push } = useRouter();
  const { setSession } = useStorage();
  const setValue = useSetRecoilState(authoState);
  const getList = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return request.data;
  }, []);

  const postAutho = useCallback(
    async (variable: { uid: string; password: string }) => {
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            ...variable,
            name: "dawoon",
          }
        );
        const { name, uid } = res.data;
        setSession("autho", res.data);
        setValue({ name, uid });
        push("/");
        return true;
      } catch {
        return false;
      }
    },
    [setValue, setSession]
  );
  return { getList, postAutho };
};

export default useRequest;
