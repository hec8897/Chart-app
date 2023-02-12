import { useCallback } from "react";
import axios from "axios";

const useRequest = () => {
  const getList = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return request.data;
  }, []);

  const postAutho = useCallback(
    async (variable: { uid: string; password: string }) => {
      return axios.post("https://jsonplaceholder.typicode.com/posts", {
        ...variable,
        name: "dawoon",
      });
    },
    []
  );
  return { getList, postAutho };
};

export default useRequest;
