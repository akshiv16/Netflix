import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'
const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('navdark')
      }else{
        navRef.current.classList.remove('navdark')
      }
    })
  },[])
  return (
    <div ref={navRef}className='navbar'>
      <div className="navbarleft">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      
      </div>
      <div className="navbarright">
<img src={search} alt="" className='icons' />
<p>Children</p>
<img src={bell} alt="" className='icons'/>
<div className="navbarprofile">
<img src={profile} alt="" className='profile'/>
<img src={caret_icon} alt="" />
<div className="dropdown">
    <p onClick={()=>{logout()}}>Sign Out Of Netflix</p>
</div>
</div>
      </div>
          </div>
  )
}

export default Navbar
