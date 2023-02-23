import React, { useState } from 'react';
import Button from '../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { metaConnect } from './../../redux/reducers/userSlices';

const Nav = () => {
  const [address, setAddress] = useState('')
  const dispatch = useDispatch();
  let addr = useSelector(state => state.user.user); 
  
  const handleClick = () => {
    dispatch(metaConnect());
    if(addr !== '') setAddress(addr.address);
  }

  return (
    <div className='nav'>
      <div className="nav__container">
        <div className='nav__logo'>LOGO</div>
        <div>
          {
            address !== '' ? 
            <span className='nav__account'>{address}</span> :
            <Button onClick={handleClick}>Connect metamask</Button>
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;
