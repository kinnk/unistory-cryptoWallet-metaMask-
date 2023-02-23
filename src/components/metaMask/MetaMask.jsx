import React from 'react';
import Button from '../button/Button';

const MetaMask = ({ modalOpen, setModalOpen }) => {

  return (
    <div className={`overlay ${modalOpen && 'overlay_active'}`}>
      <div className='metaMask'>
        <h1 className='metaMask__title'>metamask extention</h1>
        <p className='metaMask__text'>To work with our application, you have to install the <a href="https://metamask.io/download/">Metamask browser extension</a></p>
        <div className='metaMask__btnBox'>
            <Button 
          onClick={() => { setModalOpen(false)}}
          className='metaMask__btn'>Skip this step</Button>
        </div>
      </div>
    </div>
  );
}

export default MetaMask;
