import "./styles.css";
import { ModalOverlay } from "./modals/components/modal-overlay";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const showModal = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className="App">
      <button onClick={showModal}>open modal</button>
      <ModalOverlay isOpen={isModalVisible} onClose={hideModal} />
    </div>
  );
}
