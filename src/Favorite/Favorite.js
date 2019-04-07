import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import './Favorite.css'


class Favorite extends Component {

  render() {
      console.log("Favorite state",this.props.favorite);
      
    return (
      <div className='favorite_main_div'>
          <Navbar /> 
          <div className='favorite_mask'></div>
        <h1>Favorite</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        favorite : state.favorite
    }
}

export default connect(mapStateToProps)(Favorite)