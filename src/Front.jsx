import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Front.css';
const Front = () => {
    const navigate=useNavigate();
    return (
        <div>
            <header>
                <ul className='mainn'>
                    <li className='logoname'>E-Commerce</li>
                    <li className='searchbar'>Search for Products, branch and more........</li>
                    <li className='loginn' id='id1'><Link to="/Login"><FontAwesomeIcon icon={faUser}/> Login</Link></li>
                    <li className='contactus' id='id2'><i className="fa-regular fa-heart">Wish</i></li>
                    <li className='cartt' id='id3'><FontAwesomeIcon icon={faShoppingCart}/> Cart</li>
                </ul>
            </header>
            <main>
                <div className='sec-1'>
                    <ul className='category-list'>
             <li>            
                <select>
                 <option>Electronics</option>
                 <option>Smartphones</option>
                 <option>Laptops</option>
                 <option>Tablets</option>
                 <option>Smartwatches</option>
                 <option>Headphones</option>
                 <option>Gaming Consoles</option> 
                 <option>Cameras</option>
                 <option>Gaming-Accessories</option>
                 <option>Portable Powerbanks</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Ketchen</option>
                 <option>Cookware sets</option>
                 <option>Kitchen utensils</option>
                 <option>Small appliance</option>
                 <option>Dinnerware sets</option>
                 <option>Cutlery sets</option>
                 <option>Bakeware sets</option> 
                 <option>Coffee makers</option>
                 <option>Electric kettles</option>
                 <option>Slow cookers</option>
                 <option>Food processors</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Toys</option>
                 <option>Action figures</option>
                 <option>Dolls</option>
                 <option>Board games</option>
                 <option>Puzzles</option>
                 <option>Building sets</option>
                 <option>Electronic toys</option> 
                 <option>Stuffed animals</option>
                 <option>Educational toys</option>
                 <option>Outdoor toys</option>
                 <option>Art supplies</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Home Appliances</option>
                 <option>Refrigerators</option>
                 <option>Washing machines</option>
                 <option>Dryers</option>
                 <option>Dishwashers</option>
                 <option>Air conditioners</option>
                 <option>Vacuum cleaners</option>
                 <option>Microwave ovens</option>
                 <option>Stoves</option>    
                 <option>Water purifiers</option>              
                 </select>
            </li>
            <li>
                <select>
                 <option>Two Wheelers</option>
                 <option>Scooters</option>
                 <option>Motorcycles</option>
                 <option>Bicycles</option>
                 <option>Electric bikes</option>
                 <option>Decors</option>
                 <option>accessories</option> 
                 <option>Bike parts</option>
                 <option>Scooter parts</option>
                 <option>Motorcycle gear</option>
                 <option>Bike locks</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Men</option>
                 <option>T-shirts</option>
                 <option>Jeans</option>
                 <option>Shirts</option>
                 <option>Trousers</option>
                 <option>Jackets</option>
                 <option>Footwear</option> 
                 <option>Accessories</option>
                 <option>Shoes</option>
                 <option>Activewear</option>
                 <option>Outerwear</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Women</option>
                 <option>Tops</option>
                 <option>Dresses</option>
                 <option>Skirts</option>
                 <option>Trousers</option>
                 <option>Jackets</option>
                 <option>Footwear</option> 
                 <option>Accessories</option>
                 <option>Skincare</option>
                 <option>Activewear</option>
                 <option>Outerwear</option>
                </select>
            </li>
            <li>
                <select>
                 <option>Kids</option>
                 <option>T-shirts</option>
                 <option>Jeans</option>
                 <option>Dresses</option> 
                 <option>Footwear</option>
                 <option>Accessories</option>
                 <option>Toys</option>
                 <option>Books</option>
                 <option>Schoolsupplies</option>
                 <option>Activewear</option>
                 <option>Outerwear</option>
                </select>
            </li>
        </ul>
    </div>
            </main>

            {/* -------------------------------------------Main Sliding------------------------------------------------- */}

        <div>
           <div>
            </div> 

            <div className='slide-back'>
                <img src={img1} id='slide-images'></img>
                <img src={img2} id='slide-images'></img>
                <img src={img3} id='slide-images'></img>
            </div>
        </div> 

        <button className='moree' onClick={()=>navigate('/More')}>Latest Offers and Collections</button>
        </div>
    );
};
export default Front;