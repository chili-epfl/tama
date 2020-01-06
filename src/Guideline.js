import React from "react";

export default ({ title, text, buttonText, onClick, buttonDisabled }) => {
  return (
    <div className="Guidelines">
      {title && <h1>{title}</h1>}
      {text && <span>{text}</span>}
      {buttonText && (
        <button className="button" onClick={onClick} disabled={buttonDisabled}>
          {buttonText}
        </button>
      )}
    </div>
  );
};
