import React, { Component } from 'react'
import './CharacterAttacks.css'


export default class CharacterAttacks extends Component {
  render() {
    return (
        <div style={{background:'crimson', width:'100%', height:'500px',position:"relative"}}>
            
            <div className='character_details_attacks_wrapper'>
                <div className='character_details_attacks'>Character Attacks</div>
            </div>
        
        <div className='character_details_attack_table'>
            <table>
            <tbody>
                <tr>
                    <td style={{background:"black",color:'white',border:'1px solid white'}}>Normal Attack</td>
                </tr>
                <tr>
                    <td>749 › 749 › 749 › 899 Melee Damage</td>
                </tr>
                <tr>
                    <td>100% › 100% › 100% › 120% </td>
                </tr>
                <tr>
                    <td>Magnification</td>
                </tr>
            </tbody>
            </table>

            <table>
            <tbody>
                
                <tr>
                    <td style={{background:"black",color:'white', border:'1px solid white'}}>Strong Attack 1</td>
                </tr>
                <tr>
                    <td>1800 Melee Damage</td>
                </tr>
                <tr>
                    <td>120% Magnification</td>
                </tr>
                <tr>
                     <td>8 sec. Cooldown</td>
                    </tr>
               
            </tbody>
            </table>

            <table>
            <tbody>
                
                <tr>
                    <td style={{background:"black",color:'white', border:'1px solid white'}}>Strong Attack 2</td>
                </tr>
                <tr>
                    <td>2026 Melee Damage</td>
                </tr>
                <tr>
                    <td>120% Magnification</td>
                </tr>
                <tr>
                     <td>16 sec. Cooldown</td>
                    </tr>
               
            </tbody>
            </table>

            <table>
            <tbody>
               
                <tr>
                    <td style={{background:"black",color:'white', border:'1px solid white'}}>Strong Attack 3</td>
                </tr>
                <tr>
                    <td>2251 Melee Damage</td>
                </tr>
                <tr>
                    <td>120% Magnification</td>
                </tr>
                <tr>
                     <td>24 sec. Cooldown</td>
                </tr>
               
            </tbody>
            </table>

            <table>
            <tbody>
               
                <tr>
                    <td style={{background:"mediumPurple",color:'white', border:'1px solid white'}}>Special Attack</td>
                </tr>
                <tr>
                    <td>5819 Melee Damage</td>
                </tr>
                <tr>
                    <td>150% Magnification</td>
                </tr>
                
             </tbody>  
            </table>
        </div>

      </div>
    )
  }
}
