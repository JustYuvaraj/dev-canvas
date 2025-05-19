import React, { useState } from "react";

const Alert = () => {
  const [showalert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };
  return (
    <>
      {showalert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Primary
      </button>
    </>
  );
};

export default Alert;
