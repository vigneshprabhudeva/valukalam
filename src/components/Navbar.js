import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {IoBeerOutline} from 'react-icons/io5'
import {useState} from 'react'
import {Button} from '../Button'
import './Navbar.css'
import icon from './beeer.png'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Navbar() {
 const [click,setclick] = useState(false)
 const [button,setbutton] = useState(false)



 const handleClick=()=>{
     setclick(!click)
 }
 const closeMobileMenu=()=>{
     setclick(false)
 }
 const showButton=()=>{
     if(window.innerWidth<=960){
         setbutton(false)
     }else{
         setbutton(true)
     }
 }
 window.addEventListener('resize',showButton)
    return (
        <>
        
       <div className="navbar">
           
           <div className="navbar-container container" >
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}p>
               <img
                                    src={icon}
                                    alt="icon"
                                    className="icon"
                                />
                   VALUKALAM
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   {click?<FaTimes/>:<FaBars/>}
                   

               </div>
               <ul className={click? 'nav-menu active':'nav-menu'}>
                   <li className='nav-item' >
                       <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                   
                   </li>
                   <li className='nav-item' >
                       <Link to="/book" className='nav-links' onClick={closeMobileMenu}>Book</Link>
                   
                   </li>
                   <li className='nav-item' >
                       <Link to="/map" className='nav-links' onClick={closeMobileMenu}>Map</Link>
                   
                   </li>
                   <li className='nav-btn' >
                       {button?(
                           <Link to="/signup" className="btn-link">
                               <Button buttonStyles="btn--outline" >
                                   sign up
                               </Button>
                           </Link>
                       ):(
                           <Link to="/signup"  className='btn-link' onClick={closeMobileMenu}>
                               <Button buttonStyle="bt--outline" buttonsize='btn--mobile'>sign up</Button>
                           </Link>
                       )}
                       
                   
                   </li>
               </ul>

           </div>


       </div>
            
        </>
    )
}
