import { useCallback, useEffect } from "react";

type StorageRecordType = Record<keyof string, string>;

const useStorage = () => {
  const setSession = useCallback(
    (key: string, value: StorageRecordType) =>
      window.sessionStorage.setItem(key, JSON.stringify(value)),
    []
  );

  const getSession = useCallback((key: string) => {
    const value = window.sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  return {
    setSession,
    getSession,
  };
};

export default useStorage;
