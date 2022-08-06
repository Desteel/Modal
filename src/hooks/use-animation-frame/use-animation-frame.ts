import { useCallback, useEffect, useRef } from "react";
import { CreateAnimationFrame } from "./use-animation-frame.types";

function useAnimationFrame(): CreateAnimationFrame {
  const animationFrameRef = useRef<number | null>(null);

  const createAnimationFrame = useCallback((callback: FrameRequestCallback) => {
    animationFrameRef.current = requestAnimationFrame(callback);
  }, []);

  useEffect(() => {
    function cancelAnimationFrames() {
      const { current: animationFrameId } = animationFrameRef;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    }

    return cancelAnimationFrames;
  }, []);

  return createAnimationFrame;
}

export { useAnimationFrame };
