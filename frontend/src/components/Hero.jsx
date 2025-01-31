import React from 'react'

import { RiUserSettingsLine } from 'react-icons/ri';

import { useNavigate } from 'react-router-dom';

import '../css/hero.css'

export default function Hero() {

  const navigate = useNavigate();

  const navigateToSettings = () => {
    navigate('/settings');
  };

  return (
    <div className='HeroContainer'>
      <div className='HeroContentContainer'>
        <div className='HeroTextContainer'>
          <h1 div className='HeroMainText'>
            Welcome to <span>Unitrition</span> fName!
          </h1>
          <p className='HeroSubTitle'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!
          </p>
          <div className='HeroBtnWrapper'>
            <button onClick={navigateToSettings}>
              Account Settings
              <RiUserSettingsLine/>
            </button>
          </div>
        </div>
        <div className='HeroImgContainer'>
          <img src='./assets/images/HeroV3.svg' alt='' />
        </div>
      </div>
    </div>
  )
}
