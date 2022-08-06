export type UseBooleanResult = [
  boolean,
  {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  }
];
