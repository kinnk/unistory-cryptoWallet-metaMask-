import React, { useState } from 'react';
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { metaConnect } from './../../redux/reducers/userSlices';

const Nav = () => {
  const dispatch = useDispatch();
  let addr = useSelector(state => state.user); 

  const handleClick = () => {
    dispatch(metaConnect());
  }
  return (
    <div className='nav'>
      <div className="nav__container">
        <div className='nav__logo'>LOGO</div>
        <div>
          {
            addr.status === 'loading' ? <span className='nav__account'>{'Wait a second'}</span> :
            addr.status === 'Error' ? <span className='nav__account'>{'MetaMask Error, please check and try again'}</span> :
            addr.status === 'loaded' ? <span className='nav__account'>{addr.user.address}</span> :
            <Button onClick={handleClick}>Connect metamask</Button>
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;
