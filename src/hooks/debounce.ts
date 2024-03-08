import { useEffect, useState } from "react";

export function useDebounce(str: string, delay: number) {
  const [inner, setInner] = useState(str);
  useEffect(() => {
    const id = setTimeout(() => setInner(str), delay);
    return () => clearTimeout(id);
  }, [str, delay]);
  return inner;
}
