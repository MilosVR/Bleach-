import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (

        <div className='navbar_wrapper'>
      
            <div className='navbar_logo'><img src='/assets/logo.png' alt=''/></div>
            <div className='navbar_header'>
                <ul className='navbar_ul_tag'>
                  <Link to='/'><li><span className='navbar_a_tag active'>Home</span></li></Link> 
                  <Link to='/gacha'><li><span className='navbar_a_tag'>Gacha</span></li></Link> 
                  <Link to='/pvp'><li><span className='navbar_a_tag'>PVP teams</span></li></Link> 
                </ul>
            </div>
   
      </div>
     
    )
  }
}
