import React from 'react';
import './ErrorComponent.css';

const ErrorComponent = ({ errorMsg }) => {
  return (
    <div className="error-container">
      {errorMsg}
    </div>
  )
}

export default ErrorComponent;