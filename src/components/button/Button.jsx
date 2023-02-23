import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className='myBtn' onClick={onClick}>{children}</button>
  );
}

export default Button;
