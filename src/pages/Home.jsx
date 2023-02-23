import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/button/Button';
import ListItem from '../components/ListItem/ListItem';
import { addUserData, fetchData } from './../redux/reducers/dataSlices';

const Home = () => {
  const [formStatus, setFormStatus] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData());
  },[])

  const addUser = (name, email, address) => {
    dispatch(addUserData({name, email, address}))

    setFormStatus(true);
  }

  return (
    <div className='home'>
      <div className="home__container">
        {/* Header */}
        <div className='home__header'>
          <div className='home__title'>
            <h1 className='home__title-str'>Explore Your own planet</h1>
            <h1 className='home__title-str'>In <span>our New</span> metaverse</h1>
            <div className='home__textBox'>
            <p className='home__textContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='home__picture'>
            </div>  
          </div>
          </div>
          <div>
            <h4 className='home__title-right'>Roadmap stats</h4>
            <div className='home__detail'>
              <span>12,345</span>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className='home__detail'>
              <span>12,345</span>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className='home__detail'>
              <span>12,345</span>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
        {/* Register Section */}
        <div className='home__section'>
          <div className='home__section__left'>
            <div className='home__section__left-text'>
              <h4>Beta test registration</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <form 
              onSubmit={(e)=>{ 

                e.preventDefault();
                addUser(e.target[0].value, e.target[1].value, localStorage.getItem('address'));
              }} 
              className='home__section__left__form'>
              <label htmlFor="" className='home__section__left__form-label'>
                Name
                <input placeholder='We will display your name in participation list ' type="text" className='home__section__left__form-input'/>
              </label>
              <label htmlFor="" className='home__section__left__form-label'>
                Email
                <input placeholder='We will display your email in participation list ' type="email" className='home__section__left__form-input'/>
              </label>
              <Button type='submit' className='home__section__left__form-btn'>Get early access</Button>
            </form>
          </div>
          <div className='home__section__right'>
            {
              formStatus &&
              <>
              <h4>Participation listing (enable only for participants)</h4>
              <ListItem />
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
