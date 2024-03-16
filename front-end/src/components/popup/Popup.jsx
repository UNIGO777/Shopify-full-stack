

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <>
      <button className="btn btn-danger" style={{ width: "auto" , position:'absolute', top:"10px", left:"10px"}} onClick={onClose}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back
      </button>
    {children}</>
  ) : null;
};

export default Popup;