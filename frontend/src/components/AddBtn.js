import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-note"
        className="btn-floating btn-large blue darken-2 darken-w modal-trigger"
      >
        <i className="large material-icons">book</i>
      </a>
    </div>
  );
};

export default AddBtn;
