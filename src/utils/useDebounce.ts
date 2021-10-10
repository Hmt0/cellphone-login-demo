import { useEffect, useState } from "react";

export const useDebounce = <V>(value: V, delay?:number) => {
  const [ debounceValue, setDebounceValue ] = useState<V>(value);

  useEffect(() => {
    // 每次value变化，设置一个计时器
    const timer = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完后再运行
    return() => {
      clearTimeout( timer );
    }
  }, [delay, value])
}