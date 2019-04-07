import React, { Component } from 'react'

export default class CharacterDetailsDroplet extends Component {
  render() {
    return (
        <div className='character_details_box'>
        <div className='character_details_box_title' >Droplets</div>
        <div className='character_details_box_body' >
        <div className='character_details_box_table'>
          <table>
            <tbody>
              <tr>
                <td>
                  <img alt='' src='/assets/greenDroplets.png' 
                  style={{width:'40px', height:'40px',verticalAlign:"middle",marginRight:"10px"}}/>Green Droplets 
                </td>
                  <td style={{textAlign:'center'}}>80</td>
              </tr>
              <tr>
                <td>
                  <img alt='' src='/assets/redDroplets.png' 
                  style={{width:'40px', height:'40px',verticalAlign:"middle",marginRight:"10px"}}/>Red Droplets 
                </td>
                  <td style={{textAlign:'center'}}>80</td>
              </tr>
              <tr>
                <td>
                  <img alt='' src='/assets/blueDroplets.png' 
                  style={{width:'40px', height:'40px',verticalAlign:"middle",marginRight:"10px"}}/>Blue Droplets 
                </td>
                  <td style={{textAlign:'center'}}>80</td>
              </tr>
              <tr>
                <td>
                  <img alt='' src='/assets/orangeDroplets.png' 
                  style={{width:'40px', height:'40px',verticalAlign:"middle",marginRight:"10px"}}/>Orange Droplets 
                </td>
                  <td style={{textAlign:'center'}}>80</td>
              </tr>
              <tr>
                <td>
                  <img alt='' src='/assets/purpleDroplets.png' 
                  style={{width:'40px', height:'40px',verticalAlign:"middle",marginRight:"10px"}}/>Purple Droplets 
                </td>
                  <td style={{textAlign:'center',width:"80px"}}>80</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
    )
  }
}
