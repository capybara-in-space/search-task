import { useEffect, useState } from "react";
import { Result } from "../types";

export function useGetUsers(query: string) {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Result | undefined | null>(undefined);
  useEffect(() => {
    setIsLoading(false);
    setIsError(false);
    setIsCancelled(false);
    console.log(1);
    if (query.length !== 0) {
      fetch(`https://dummyjson.com/users/search?q=${query}`)
        .then((response) => response.json())
        .then((value: Result | undefined | null) => {
          if (!isCancelled) {
            setData(value);
            setIsLoading(false);
            setIsSuccess(true);
          }
        })
        .catch(() => {
          if (!isCancelled) {
            setIsError(true);
          }
        })
        .finally(() => {
          if (!isCancelled) {
            setIsLoading(false);
          }
        });
    } else {
      setData(undefined);
      setIsLoading(false);
      setIsSuccess(true);
      setIsError(false);
    }
    return () => {
      setIsCancelled(true);
    };
  }, [query]);
  return { isSuccess, isError, isLoading, data: data?.users };
}
