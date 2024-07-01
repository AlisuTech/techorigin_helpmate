import React from "react";

const MakePayment = ({ id, title }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-3 space-y-3">
            <div className="flex flex-col">
              <label htmlFor="currPwd">Current Password</label>
              <input type="password" className="form-control" id="currPwd" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newPwd">New Password</label>
              <input type="password" className="form-control" id="newPwd" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newPwdConfirm">Confirm New Password</label>
              <input type="password" className="form-control" id="newPwdConfirm" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Save
            </button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;