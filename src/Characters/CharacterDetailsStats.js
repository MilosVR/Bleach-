import React, { Component } from 'react'

export default class CharacterDetailsStats extends Component {
  render() {
    return (
        <div className='character_details_box'>
        <div className='character_details_box_title' >Stats</div>
  
        <div className='character_details_box_body'>
        <div className='character_details_box_table'>
          <table>
            <tbody>
              <tr>
                <td>
                  <img alt='' src='/assets/stamina.jpg' style={{width:'40px', height:'40px',verticalAlign:"middle"}}/> Stamina : 
                </td>
                  <td style={{textAlign:'center'}}>{this.props.stats.stamina}</td>
              </tr>
              <tr>
                <td><img alt='' src='/assets/attack.jpg' style={{width:'40px', height:'40px',verticalAlign:"middle"}}/> Attack: </td>
                <td style={{textAlign:'center'}}>{this.props.stats.attack}</td>
                </tr>
              <tr>
                <td><img alt='' src='/assets/defense.jpg' style={{width:'40px', height:'40px',verticalAlign:"middle"}}/> Defense: </td>
                <td style={{textAlign:'center'}}>{this.props.stats.defense}</td>
                </tr>
              <tr>
                <td><img alt='' src='/assets/focus.jpg' style={{width:'40px', height:'40px',verticalAlign:"middle"}}/> Focus: </td>
                <td style={{textAlign:'center'}}>{this.props.stats.focus}</td>
                </tr>
              <tr>
                <td><img alt='' src='/assets/sp.jpg' style={{width:'40px', height:'40px',verticalAlign:"middle"}}/> SP: </td>
                <td style={{textAlign:'center'}}>{this.props.stats.sp}</td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
    )
  }
}
