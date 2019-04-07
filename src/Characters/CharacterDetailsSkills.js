import React, { Component } from 'react'
import './Characters_skills.css'

export default class CharacterDetailsSkills extends Component {
  render() {
    return (
        <div style={{background:'dodgerblue', width:'100%', height:'600px',position:"relative"}}>
            
          <div style={{position:'absolute',bottom:"0", left:"-100px", height:"100%"}}>
            <img alt='' src='/assets/characterSkillsAizenImage.png' 
                 style={{bottom:"0", left:"0", height:"100%", width:"100%"}}/>
          </div>

            <div className='character_details_skills_wrapper'>
                <div className='character_details_skills'>Character Skills</div>
            </div>

            <div className='character_skils_wrapper'>

            <table style={{width:"20%",zIndex:'1',borderCollapse: 'collapse'}}>
              <tbody>
                <tr>
                  <td style={{background:"black",}}>
                    <span style={{fontSize:"20px", fontFamily:"cursive", fontWeight:'bold', color:"white"}}>
                    Killer</span></td>
                </tr>
                <tr>
                  <td style={{background:"white", color:'black'}}>
                    <div style={{padding:'10px', display:"flex", justifyContent:"space-around", alignItems:'center'}}>
                    <img alt='' src='/assets/killerEspada.png' style={{width:'40px', height:"40px"}}/> 
                    Espada +40% DMG.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table style={{zIndex:"1"}}>
            <tbody>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Sprinter </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}>Increased number of Flash Steps (+1)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Long Reach  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}>Increased normal attack area-of-effect (20%)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Adrenaline  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}>Increased normal attack speed (10%)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Havoc  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}> Increased strong attack area-of-effect (20%)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Bruiser  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}> Increased normal attack damage (20%)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:'cursive'}}>Devastation  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}> Increased Special Move damage (40%)</td>
              </tr>
              <tr>
                <td style={{fontSize:'16px',width:"30%",background:"url(/assets/blueMetal.jpg)",borderRadius:"5px",fontFamily:"cursive"}}>Frenzy  </td>
                <td style={{fontSize:'16px',width:"70%",background:'url(/assets/blueMetal1.jpg)center center',fontWeight:"bold", fontFamily:'cursive',textShadow: '2px 2px 4px #000000',borderRadius:"5px"}}>Increased strong attack hits (+1)</td>
              </tr>
            </tbody>
            </table>  

            </div>    
        </div>
    )
  }
}
