import './confirm-dialog.css';

export function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Delete', cancelText = 'Cancel', isDangerous = false }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-icon">
          {isDangerous ? '⚠' : '?'}
        </div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="btn btn-secondary" onClick={(e) => { e.stopPropagation(); onCancel(); }}>
            {cancelText}
          </button>
          <button 
            className={`btn ${isDangerous ? 'btn-error' : 'btn-primary'}`}
            onClick={(e) => {
              e.stopPropagation();
              onConfirm();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

// Error button variant
export default ConfirmDialog;
