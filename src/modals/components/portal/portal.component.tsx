import { FC, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Portal: FC = ({ children }) => {
  const containerRef = useRef(document.createElement("div"));

  useEffect(() => {
    const { current: container } = containerRef;

    document.body.appendChild(container);

    return (): void => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, containerRef.current);
};

export { Portal };
