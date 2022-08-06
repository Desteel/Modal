import { PropsWithChildren } from "react";

export type BaseModalProps = PropsWithChildren<{
  isOpen?: boolean;
  onClose?: () => void;
  delay?: number;
}>;

export type ModalProps = BaseModalProps & {
  beforeShow?: () => void;
  beforeClose?: () => void;
};
