import ReactDOM from "react-dom";
import { ModalProps } from "../../utils/interfaces";

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onRequestClose}></div>
        <div className="bg-white p-6 rounded shadow-lg z-10">
          {children}
        </div>
      </div>,
      document.body
    );
  };
  
  export default Modal;