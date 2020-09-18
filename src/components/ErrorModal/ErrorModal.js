import React from "react";
import "./ErrorModal.scss";

const ErrorModal = ({ handleError }) => {
  return (
    <div className="error-modal">
      <div className="error-modal-container">
        <h2>Oops!</h2>
        <p>Something went wrong.</p>
        <button onClick={handleError}>Try again</button>
      </div>
    </div>
  );
};

export default ErrorModal;
