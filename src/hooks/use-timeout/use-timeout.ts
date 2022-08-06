import { useCallback, useEffect, useRef } from "react";
import { TimeoutId } from "../../types/helpers";
import { CreateTimeout } from "./use-timeout.types";

function useTimeout(): CreateTimeout {
  const timeoutsRef = useRef<Set<TimeoutId>>(new Set());

  const createTimeout = useCallback((callback: () => void, delay?: number) => {
    const timeoutId = setTimeout(() => {
      callback();
      timeoutsRef.current.delete(timeoutId);
    }, delay);

    timeoutsRef.current.add(timeoutId);
  }, []);

  useEffect(() => {
    function clearTimeouts() {
      timeoutsRef.current.forEach(clearTimeout);
    }

    return clearTimeouts;
  }, []);

  return createTimeout;
}

export { useTimeout };
