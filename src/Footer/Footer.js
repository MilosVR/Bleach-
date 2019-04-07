import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
        width:"100%", 
        height:"500px",
        position:"relative",
        background:'url(/assets/hexagon1.jpg)',
        }}> 
      
      <div style={{ 
          display:'flex',
          justifyContent:"center", 
          alignItems:'center',
          color:"white",
          position:"relative",
        }}>
        
        <div style={{
          display:"flex", 
          justifyContent:'space-around', 
          alignItems:'center',
          width:"600px", 
          height:"200px"
          }}>

        <div style={{width:'150px', height:"150px", position:'relative'}}>
        <img alt='' src='/assets/BBSIcon.jpg' 
        style={{
          width:"100%", 
          height:"100%", 
          position:'absolute', 
          top:'0', 
          left:"0",
          borderRadius:"20px"
          }}/>    
        </div>

        <div>
          <p>Game Title	Bleach:</p>
          <p> Supported OSes</p>
          <p>Genre</p>
          <p>Price</p>
        </div>

        <div >
          <p>Brave Souls</p>
          <p>iOS, Android</p>
          <p>3D Action</p>
          <p>Free-to-play (in-app purchases available)</p>
        </div>

        </div>
      </div>
          
      <div style={{display:"flex", justifyContent:'center',margin:"20px auto", color:'white',listStyle:"none" }}>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Privacy Policy </li>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Contact</li>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Notes</li>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Information Notice</li>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Cookie</li>
        <li style={{marginLeft:"20px",background:"white",color:"black",padding:'5px',borderRadius:"3px"}}>Information</li>
      </div>
       
      <div style={{ color:'white'}}>
        <p>© Tite Kubo/Shueisha, TV TOKYO, dentsu, Pierrot</p>
        <p>© KLabGames</p>
      </div>

        <div style={{display:"flex", justifyContent:"center", width:"100%",margin:'50px auto',alignItems:'center',background:"white", height:'100px',overflow:'hidden'}}>
          <div style={{display:"flex", justifyContent:"space-between",alignItems:'center'}}>
          <img src='/assets/KLabLogo.png' alt='' style={{width:"200px", height:"200px",marginRight:"50px"}}/>
          <p style={{width:"600px",color:"black"}}>
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
 