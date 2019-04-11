import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import './CharactersDetails.css'
import CharacterDetailsStats from './CharacterDetailsStats';
import CharacterDetailsSoulTrait from './CharacterDetailsSoulTrait';
import CharacterDetailsDroplet from './CharacterDetailsDroplet';
import CharacterDetailsSkills from './CharacterDetailsSkills';
import CharacterAttacks from './CharacterAttacks';
import Footer from '../Footer/Footer';

class CharactersDetails extends Component {


  render() {
     
    return (  
      <div className='characters_details-main_div'> 
      <Navbar />     
      <div className='characters_details_mask'></div>
      <div className='characters_details_wrapper' >

        <div>
        <h1 className='characters_details_title'>{this.props.stats.name}</h1>
        <div className='characters_details' >
            <img alt='' src={this.props.stats.charImg && this.props.stats.charImg} />
            <div className='characters_details_ultra_rare'>
            <img alt='' src='/assets/blackPaint.png' 
            style={{width:'700px', height:'100px',position:"absolute", top:"0px", left:"-350px"}}/>
            <img alt='' src='/assets/fiveStars.png' 
            style={{width:'100px', height:'100px',position:"absolute", top:"15px", left:"-200px"}}/>
            <img alt='' src='/assets/ultraRare.png' 
            style={{width:'150px', height:'50px',position:"absolute", top:"25px", left:"-80px"}}/>
            </div>
        </div>
        <div style={{color:"white", fontStyle: 'italic',fontSize:"20px", margin:"20px"}}>
            {this.props.stats.leadText && '"' + this.props.stats.leadText + '"'}
        </div>
        </div>

        <div className='characters_details_right_side'>

      <div className="container">

      <div className='shadow'>
        <div className='hex'>
          <div >{this.props.stats.atribute.toUpperCase()}<br/>
          <img alt='' src={`/assets/${this.props.stats.atribute}.png`} style={{width:'30px',height:"30px"}}/>
          </div> 
        </div>
        </div>

        <div className='shadow'>
          <div className='hex' style={{width:"300px", height:"300px", marginTop:"50px", padding:"10px"}}><div>
          <h2>Profile</h2>
          <p>{this.props.stats.info}</p>
          </div>
          </div>
        </div>

        <div className='shadow'>
        <div className='hex' style={{width:'150px',height:"120px"}}>
        <div>{this.props.stats.affiliation.toUpperCase()}<br/>
        <img alt='' src={`/assets/${this.props.stats.affiliation}.png`}
             style={{width:'40px',height:"40px",padding:"5px"}} />
        </div>
        </div>
        </div>

      </div>

        <div className="container1">

        <div className='shadow'>
        <div className='hex1' style={{width:"250px", height:"250px",marginLeft:"50px"}}>
        <div >
          <h3 style={{fontFamily:'cursive'}}>Soul Trait</h3>
          {this.props.stats.soulTrait.name} <hr/>
          {this.props.stats.soulTrait.value} 
        </div>
        </div>
        </div>  

        <div className='shadow1'>
        <div className='hex1' 
        style={{
          width:"150px",
          height:'150px',
          background:'url(/assets/blueMetal.jpg)',
          color:'cyan', 
          fontWeight:"bold",
          fontFamily:"cursive",
          fontSize:'18px',
          textShadow: '3px 3px 5px black'
          }}>
        Character <br/>Details</div>
        </div>

        </div>
        </div>

      </div>


      <div className='characters_details_stats_main_div'>

      <div className='character_details_stats_wrapper'>
        <div className='character_details_stats'>Character Stats</div>
      </div>

      <div className='character_details_box_wrapper'>

      <CharacterDetailsStats stats={this.props.stats} />    
      
      <CharacterDetailsSoulTrait stats={this.props.stats} />

      <CharacterDetailsDroplet stats={this.props.stats} />

      </div>

      <CharacterDetailsSkills />      
      <CharacterAttacks />
      <Footer />
      </div>    


      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id
        
    return {
        stats : state.stats.find(item => item.id.toString() === id)
    }
}

export default connect(mapStateToProps)(CharactersDetails)