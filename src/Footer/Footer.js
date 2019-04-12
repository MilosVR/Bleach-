import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer_main_div'> 
      
      <div className='footer_top'>
        <div className='footer_top_wrapper'>

        <div className='footer_top_image_div'>
        <img alt='' src='/assets/BBSIcon.jpg'/>    
        </div>

        <div className='footer_top_game_description'>
        <div>
          <p>Game Title	Bleach:<span> Brave Souls</span></p>
          <p> Supported OSes:<span>iOS, Android</span></p>
          <p>Genre:<span>3D Action</span></p>
          <p>Price:<span> Free-to-play (in-app purchases available)</span></p>
        </div>

        </div>

        </div>
      </div>
          
      <div className="footer_links">
        <li >Privacy Policy </li>
        <li >Contact</li>
        <li >Notes</li>
        <li >Information Notice</li>
        <li >Cookie</li>
        <li >Information</li>
      </div>
       
      <div style={{ color:'white'}}>
        <p>© Tite Kubo/Shueisha, TV TOKYO, dentsu, Pierrot</p>
        <p>© KLabGames</p>
      </div>

        <div className='footer_bottom'>
          <div className='footer_bottom_wrapper'>
          <img src='/assets/KLabLogo.png' alt='' />
          <p >
             Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries.
             App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
             Android, Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          </div>
        </div>

      </div>
    )
  }
}
 