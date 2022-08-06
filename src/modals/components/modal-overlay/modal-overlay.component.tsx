import { Portal } from "../portal";
import "./modal-overlay.styles.css";
import { ModalProps } from "../../types";
import cn from "classnames";
import { useBoolean } from "../../../hooks/use-boolean";
import { useAnimationFrame } from "../../../hooks/use-animation-frame";
import { useTimeout } from "../../../hooks/use-timeout";
import { useEffect } from "react";

function ModalOverlay({
  children,
  isOpen,
  beforeShow,
  onClose,
  beforeClose,
  delay = 500
}: ModalProps) {
  const [visible, { setTrue: show, setFalse: hide }] = useBoolean(false);

  const createAnimationFrame = useAnimationFrame();
  const createTimeout = useTimeout();

  const containerClassName = cn("container", {
    "container--hidden": !visible,
    "container--visible": visible
  });

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

  return isOpen ? (
    <Portal>
      <div className={containerClassName} role="dialog" onClick={handleClose}>
        <div className="overlay" />
        {children}
      </div>
    </Portal>
  ) : null;
}

export { ModalOverlay };
