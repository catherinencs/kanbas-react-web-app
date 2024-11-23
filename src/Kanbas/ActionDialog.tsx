interface ActionDialogProps {
    id: string;
    name: string;
    actionType: "Enroll" | "Unenroll";
    onConfirm: () => void;
  }
  
  export default function ActionDialog({
    id,
    name,
    actionType,
    onConfirm,
  }: ActionDialogProps) {
    return (
      <div
        className="modal fade"
        id={`wd-${actionType.toLowerCase()}-course-dialog-${id}`}
        tabIndex={-1}
        aria-labelledby={`${actionType.toLowerCase()}DialogLabel-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${actionType.toLowerCase()}DialogLabel-${id}`}>
                Confirm {actionType}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to {actionType.toLowerCase()} <strong>{name}</strong>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-${actionType === "Enroll" ? "success" : "danger"}`}
                onClick={onConfirm}
                data-bs-dismiss="modal"
              >
                {actionType}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  