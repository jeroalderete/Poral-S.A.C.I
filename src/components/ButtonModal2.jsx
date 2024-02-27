import { useState } from "react";
import { createPortal } from "react-dom";


import Modal from "./Modal";

function ButtonModal2() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Open
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1>This is a modal</h1>
            <br />
            <p>This is the modal description</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default ButtonModal2;