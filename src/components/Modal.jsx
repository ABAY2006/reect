import './modal.css';

export function Modal({ isOpen, title, children, onClose, onConfirm, confirmText = 'Save', cancelText = 'Cancel' }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={(e) => { e.stopPropagation(); onClose(); }}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={(e) => { e.stopPropagation(); onClose(); }}>
            {cancelText}
          </button>
          {onConfirm && (
            <button 
              className="btn btn-primary" 
              onClick={(e) => { 
                e.stopPropagation(); 
                onConfirm(); 
              }}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
