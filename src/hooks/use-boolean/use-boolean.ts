import { useCallback, useState } from "react";
import { UseBooleanResult } from "./use-boolean.types";

function useBoolean(initialValue: boolean = false): UseBooleanResult {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [
    value,
    {
      setTrue,
      setFalse,
      toggle
    }
  ];
}

export { useBoolean };
