import { useCallback } from "react";
import axios from "axios";

const useRequest = () => {
  const getList = useCallback(async () => {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return request.data;
  }, []);
  return { getList };
};

export default useRequest;
