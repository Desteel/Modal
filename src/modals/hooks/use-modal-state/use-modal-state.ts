import { useBoolean } from "../../../hooks/use-boolean";
import { useAnimationFrame } from "../../../hooks/use-animation-frame";
import { useTimeout } from "../../../hooks/use-timeout";

import { useEffect } from "react";
import { UseModalStateProps } from "./use-modal-state.types";

function useModalState({
  isOpen,
  beforeShow,
  beforeClose,
  onClose,
  delay
}: UseModalStateProps) {
  const [visible, { setTrue: show, setFalse: hide }] = useBoolean(false);

  const createAnimationFrame = useAnimationFrame();
  const createTimeout = useTimeout();

  useEffect(() => {
    if (isOpen) {
      beforeShow?.();

      createAnimationFrame(show);
    }
  }, [isOpen, createAnimationFrame, show, beforeShow]);

  function handleClose() {
    hide();
    beforeClose?.();

    createTimeout(() => {
      onClose?.();
    }, delay);
  }

  return {
    visible,
    handleClose
  };
}

export { useModalState };
