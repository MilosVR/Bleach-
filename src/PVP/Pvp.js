import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import './Pvp.css'
import Footer from '../Footer/Footer'


export default class Pvp extends Component {
  render() {
    return (
      <div style={{
        width:"100%", 
        height:'100vh', 
        overflow:"scroll", 
        }}>

        <Navbar />
        
        <div style={{height:"80px"}}></div>

        <div className='pvp_header' style={{background:"url(/assets/hexagon1.jpg)"}}>

        <div style={{width:"100%", height:"500px",position:'relative'}}>
        <img  src='/assets/header7.png' alt='' className='pvp_header_image1'/>
        <div className='pvp_header_image2_div'>
        <img  src='/assets/header8.png' alt=''/>
        <span >PVP - Guide</span>
        </div>
        <img  src='/assets/bleachBackground.jpg' alt='' className='pvp_header_image2'/>  
        </div>
        
        <div className='pvp_section'>

        <img alt='' src='/assets/headerBottom.png' 
        style={{position:"absolute",width:"100%", height:"50px",zIndex:"6"}}/> 

        <div className='pvp_section_polygonal_gray'></div>  


        <div className='pvp_section_three_polygonals'>
          <div className='pvp_section_first_polygonal'>
          <img alt='' src='/assets/circle2.png' />
          <span >Links</span>
          </div>

          <div className='pvp_section_first_polygonal'>
          <img alt='' src='/assets/circle2.png' />
          <span >Accessories</span>
          </div>
          
          <div className='pvp_section_first_polygonal'>
          <img alt='' src='/assets/circle2.png' />
          <span >Team Types</span>
          </div>
        </div>

        </div>


        <div className='pvp_section_polygonal_text'>
        <div className='pvp_section_three_polygonals_text'>

        <div className='pvp_section_first_polygonals_text' >
        <p style={{background:"gray", color:"white"}}>
          Links are very important to building a team as they can really make a difference to the complexion of your team. There are 6 main links I would recommend for PVP;<br/><br/>
          <li><span style={{fontWeight:"bold"}}>Damage Reduction</span> are currently the best PVP links. Most teams in the higher leagues use these. They reduce the damage you receive by a %. Any team can use these and they will work well.</li>
          <li><span style={{fontWeight:"bold"}}>Dodge</span> is an alternative to damage reduction it also reduces the damage the character will take. The reason Damage Reduction has kind of taken the throne is because dodge can be random and can be unreliable. It still has its benefits like dodging attacks that cause status, and stopping your strong attacks being interrupted.</li>
          <li><span style={{fontWeight:"bold"}}>Stamina</span> +320 are the only stamina links worth using. Depending on the characters base HP these can be more beneficial than damage reduction as they offer more effective HP.</li>
          <li><span style={{fontWeight:"bold"}}>Normal Attack Damage</span> is great for characters with chappies, it boost the damages of normal attacks.</li>
          <li><span style={{fontWeight:"bold"}}>Strong Attack Damage</span> this boosts strong attacks, it can be used on hybrid or SAD teams but never with chappies without SP strong attacks do hardly any damage.</li>
          <li><span style={{fontWeight:"bold"}}>Attack</span> +100 are great for hybrid teams as it boosts both NAD and SAD, the weaker attack links are again not worth using as other links offer greater returns.</li>
          <li>Some of the Free Frenzy characters have some very useful links that can be used in PVP but I'll let you discover these for yourselves.</li>
        </p>
        </div>

        <div className='pvp_section_first_polygonals_text' style={{clipPath:"none",background:"gray"}}>
        <p style={{clipPath:"none", background:"lightgray"}}>
          Accessories contribute to which characters you choose as you may have good accessories only for certain attributes. The main accessories you will see appearing in the higher leagues (which usually takes a lot of grinding to acquire) are:<br/><br/>
          <li><span style={{fontWeight:"bold"}}>Chappies</span> are arguably the fundamentals for a NAD team. They increase all your stats except spiritual pressure (SP), which only affects your strong attacks and specials. Pairing a ★4 and ★5 of the character's attribute is common and will give that character a real power boost.</li>
          <li><span style={{fontWeight:"bold"}}>Tenshintai</span> are often seen on Hybrid or SAD teams. It increases the power of your special move, and because you haven't reduced your SP to zero, good chance that if you get a soul bomb (SB), this will change the course of a match.</li>
          <li><span style={{fontWeight:"bold"}}>Headbands of Justice</span> are handy for any team. They reduce attribute weakness, meaning if you get a bad attribute match up, you will take reduced damage. Although you will be aiming to avoid unfavorable match ups for each character, strong attacks with large or full screen range may be unavoidable. Headbands will help reduce this damage.</li>
          <li><span style={{fontWeight:"bold"}}>Hojiku-Zai</span> are niche items that are really good on teams that have a team healer like Tsukishima, or on a character like WD Ulquiorra who has a self heal.</li>
          <li><span style={{fontWeight:"bold"}}>Shihoin Shields</span> are less common as you can't fuse them, making them harder to come by. Shihoin Shields reduce the incoming damage from ranged attacks, making them good for characters who will be matching up against ranged characters.</li>
          
        </p>
        </div>


        <div className='pvp_section_first_polygonals_text' 
        style={{clipPath:'polygon(100% 0, 100% 100%, 0 100%, 0 15%)'}}>
        <p style={{clipPath:'polygon(100% 0, 100% 100%, 0 100%, 0 15%)',background:"gray", color:"white"}}>
        Character and team types roughly fall into four categories:<br/><br/><br/>
          <span style={{fontWeight:"bold", fontSize:"16px"}}>Normal Attack Damage (NAD)</span><br/><br/>
          NAD teams focus on having a good normal attack string, whether it's fast, ranged or just a good moveset overall with wide reaching attacks. Generally, NAD teams will use Special strategy because it means they are less likely to use strong attacks. It's also worth putting in a character that inflicts freeze, paralysis or weakening, as the strategy frequently nets you soul bombs.
          Characters are usually equipped with dual chappies, and tend to use DR, Dodge, STA+320, or NAD Links.
          Examples: Kenpachi, Kenpachi, and Shunsui.<br/><br/>
          <span style={{fontWeight:"bold", fontSize:"16px"}}>Strong Attack Damage (SAD)</span><br/><br/>
          SAD teams have powerful strong attacks, and often weaker normal attacks. Often, these characters will have the ★6 ability Frenzy, meaning their strong attacks hit twice. Attack strategy is recommended because it offers a 30% SP boost to your characters, and they are more likely to use their strong attacks first. With correctly built teams, their strong attacks will quickly defeat the opposition.
          Characters tend to favor SP boosting accessories and SAD links over livability, as they due to their frailty, are unlikely to survive until they can use their strong attacks again.
        </p>
        </div>

        </div>
        </div>    

        <img alt='' src='/assets/shadow.png' style={{width:"100%", height:"100px", position:'absolute', bottom:"0", left:"0"}}/>      

        </div>
        
        <Footer />

      </div>
    )
  }
}
