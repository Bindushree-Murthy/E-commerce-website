import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Buy.css';
const Buy = () => {
  const navi=useNavigate();
  const cartfunction=()=>{
    navi('/Cart');
  }

  const buyfunction=()=>{
    navi('/Register');
  }

  const location = useLocation();
  const { image, cost, offerDays,name } = location.state;
  
  return (
    <div className='back'>
      <h1 className='buy'>Get Ready to Rock Your New Gear!</h1>
      <h1 className='bh1'>{name}</h1>
      <img src={image} alt="" className='bimg'/>
      <div className='bflex'>
      <h2 className='longg'>"Unbeatable Deals Ahead: Exclusive Discounts Up To 50% Off On Your Favorite Products!"</h2>
      <h4 className='lonn'>⭐⭐⭐⭐⭐ star rating | 1000 reviews</h4><hr className='linee'/><br/>
      <h2 className='bh2'>Cost: {cost}</h2>
      <h3>Offer ends in: <span className='bh4'>{offerDays}</span></h3><br/><hr className='linee'/><br/>
      <div className='boxes'>
      <div className='bck' id='lefi'>
      <h3 >Add to cart</h3>
      <button onClick={()=>cartfunction()} className='btn'>Cart</button> 
      </div>
      <div className='bck'>
      <h3 id='leff'>Click below to purchase</h3>
      <button onClick={()=>buyfunction()} className='btn'>Purchase</button>
      </div>
      </div>
      </div>
    </div>
  );
};  
export default Buy;
