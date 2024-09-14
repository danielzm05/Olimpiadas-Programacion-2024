import { IconX } from "@tabler/icons-react";
import "../styles/Modal.css";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <section className="modal">
        <button className="close-button" onClick={onClose}>
          <IconX />
        </button>
        {children}
      </section>
    </div>
  );
}
