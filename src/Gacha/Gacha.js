import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import './Gacha.css'
import GachaModal from './GachaModal';
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'

class Gacha extends Component {

    state = {
        open: false,
        currentImage:null,
        gachaTitle:null,
        gachaSummonsImg:null
      };
    
      handleClickOpen = (currentImage, gachaTitle, gachaSummonsImg) => {
        this.setState({ 
          open: true,
          currentImage,
          gachaTitle,
          gachaSummonsImg 
        });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
  render() {

    return (
      <div >
        <div className='gacha_main_div' >
          <div style={{height:"100px"}}></div>
          <GachaModal
          gachaSummonsImg={this.state.gachaSummonsImg}
          title={this.state.gachaTitle}
          currentImage={this.state.currentImage} 
          handleClose={this.handleClose}
          handleClickOpen={this.handleClickOpen} 
          open={this.state.open}
          />
          <Navbar />
        <div className='gacha_title'>
        <span >Gacha details</span>
        </div>

        <div className='gacha_grid_wrapper'>

        {this.props.gacha && this.props.gacha.map((item => {
          return (
            <div className='gacha_card' key={item.id}>
            <div className='gacha_card_title'>{item.gachaTitle}</div>
            <div className='gacha_card_img'>
            <img alt='' src={item.gachaImg} />
            <span><br/>{item.date}</span>
            </div>
            <div className='gacha_card_modal' 
            onClick={()=>this.handleClickOpen(item.gachaImg,item.gachaTitle, item.gachaSummonsImg)}>
            More details
            </div>
            </div>    
          )
        }))}
        
        </div>
      <img alt='' src='/assets/shadow.png' style={{width:"100%", height:"100px", position:'absolute', bottom:"0", left:"0"}}/>      
      </div>
      <Footer />  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gacha : state.gacha
  }
}

export default connect(mapStateToProps)(Gacha)