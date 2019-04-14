import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import './Favorite.css'
import { Link } from 'react-router-dom'
import ZoomIcon from '@material-ui/icons/ZoomIn'
import EmptyHeart from '@material-ui/icons/FavoriteBorder'
import FavoriteHeart from '@material-ui/icons/Favorite'
import {
  sortByAscending, 
  sortByDescending, 
  sortByAttack, 
  sortBySp,
  addToFavorite,
  removeFromFavorite,
  powerAtribute,
  techniqueAtribute,
  mindAtribute,
  heartAtribute,
  speedAtribute
 }
   from '../action/action'

class Favorite extends Component {

  state = {
    name: this.props.stats
  }

  showFavorite = (item) => {
    this.setState({favorite : true})
    this.props.addToFavorite(item)

  }
  hideFavorite = (item) => {
    this.setState({favorite : false})
    this.props.removeFromFavorite(item)
  }

  AddOrRemoveFromFavorites = (favorites, item) => {
    return favorites.find(favoriteItem => favoriteItem.id === item.id);
  };

  render() {     
    return (
      <div className='favorite_main_div' >
        <Navbar /> 
      <div className='favorite_mask'></div>
       
      <div className='favorite_list_title'>Favorite list</div>

      <div className='card_wrapper'>

      {
        this.props.favorite.length 
        <= 0 && 
        <div className='empty_favorite_list'>Your favorite list is empty</div>
      }

      {this.props.favorite && this.props.favorite.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img className='card_Background' src={`${item.charImg}`} alt=''/>
              <div className='char_name_wrapper' >
                <span className='char_name_span'>
                  <img alt='' src={`/assets/${item.atribute}.png`}/>
                  <span
                    style={{
                    marginLeft: "10px"
                  }}>{item.name}</span>
                </span>

              </div>

              <div className='card_image_back'>
                
                <div >
                  <table className='table_stats'>
                    <tbody >
                      <tr className='charStats'>
                        <td><img alt='' src='/assets/stamina.jpg'/>Stamina</td>
                      </tr>
                      <tr className='charStats_value'>
                        <td>{item.stamina}</td>
                      </tr>
                    </tbody>

                    <tbody >
                      <tr className='charStats'>
                        <td><img alt='' src='/assets/attack.jpg'/>Attack</td>
                      </tr>
                      <tr className='charStats_value'>
                        <td>{item.attack}</td>
                      </tr>
                    </tbody>

                    <tbody >
                      <tr className='charStats'>
                        <td><img alt='' src='/assets/defense.jpg'/>Defense</td>
                      </tr>
                      <tr className='charStats_value'>
                        <td>{item.defense}</td>
                      </tr>
                    </tbody>

                    <tbody >
                      <tr className='charStats'>
                        <td><img alt='' src='/assets/focus.jpg'/>Focus</td>
                      </tr>
                      <tr className='charStats_value'>
                        <td>{item.focus}</td>
                      </tr>
                    </tbody>

                    <tbody >
                      <tr className='charStats'>
                        <td><img alt='' src='/assets/sp.jpg'/>Sp</td>
                      </tr>
                      <tr className='charStats_value'>
                        <td>{item.sp}</td>
                      </tr>
                    </tbody>                       

                  </table>
                  
                </div>
                  <div>
                  
                  <Link to={`/character/${item.id}`}>
                  <div className='card_image_back_zoom'>
                  <div style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}>
                  <ZoomIcon  style={{width:"40px", height:"40px", color:"white"}}/>                        
                  </div>             
                  </div>
                  </Link>

                  {!this.AddOrRemoveFromFavorites(this.props.favorite, item)

                  ? 
                    (<div className='card_image_back_favorite_wrapper' 
                    onClick={()=>this.showFavorite(item,item.id,this.props.favorite)}>
                    <div className='card_image_back_favorite'>
                    <div style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}>
                    <EmptyHeart  style={{width:"30px", height:"30px", color:"white",cursor:'pointer'}}/>                        
                    </div>             
                    </div>
                    </div>)
                  :  
                    (<div className='card_image_back_favorite_wrapper' 
                    onClick={()=>this.hideFavorite(item,item.id)}>
                    <div className='card_image_back_favorite'>
                    <div style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}>
                    <FavoriteHeart  style={{width:"30px", height:"30px", color:"white",cursor:'pointer'}}/>                        
                    </div>             
                    </div>
                    </div>)
                  }

                  </div>
              </div>
            </div>
          )
        })}

      </div>

      </div>
    )
  }
}
const actions = {
  sortByAscending,
  sortByDescending,
  sortByAttack,
  sortBySp,
  addToFavorite,
  removeFromFavorite,
  powerAtribute,
  techniqueAtribute,
  mindAtribute,
  heartAtribute,
  speedAtribute
}
const mapStateToProps = state => {
  return {
    stats: state.stats, 
    favorite:state.favorite
  }
}
export default connect(mapStateToProps,actions)(Favorite)

