import { useCallback } from "react";
import axios from "axios";

const useRequest = () => {
  const getList = useCallback(async () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return { getList };
};

export default useRequest;
