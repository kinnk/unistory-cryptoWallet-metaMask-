import React from 'react';

const Item = ({ username, email, address}) => {
  return (
    <li className='item'>
      <span className='item__username item__element'>{username}</span>
      <span className='item__email item__element'>{email}</span>
      <span className='item__address item__element'>{address}</span>
    </li>
  );
}

export default Item;
