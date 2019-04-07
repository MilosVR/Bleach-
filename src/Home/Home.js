import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Home.css';
import HomeFilter from './Home_Filter';
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
import { Link } from 'react-router-dom'
import NavbarHome from '../Navbar/NavbarHome';
import ZoomIcon from '@material-ui/icons/ZoomIn'
import EmptyHeart from '@material-ui/icons/FavoriteBorder'
import FavoriteHeart from '@material-ui/icons/Favorite'
import Footer from '../Footer/Footer';

class Home extends Component {

  state = {
    name: this.props.stats,
    options: [
      {
        "key": "Descending",
        "text": "Descending",
        "value": "Descending"
      }, {
        "key": "Ascending",
        "text": "Ascending",
        "value": 'Ascending'
      }
    ],
    options1: [
      {
        "key": "Attack",
        "text": "Attack",
        "value": "Attack"
      }, {
        "key": "Sp",
        "text": "Sp",
        "value": 'Sp'
      }
    ],
    options2: [
      {
        "key": "All",
        "text": "All",
        "value": "All"
      },
      {
        "key": "Power",
        "text": "Power",
        "value": "Power"
      }, {
        "key": "Technique",
        "text": "Technique",
        "value": 'Technique'
      },
      {
        "key": "Mind",
        "text": "Mind",
        "value": 'Mind'
      },
      {
        "key": "Heart",
        "text": "Heart",
        "value": 'Heart'
      },
      {
        "key": "Speed",
        "text": "Speed",
        "value": 'Speed'
      }
    ],
    stats:this.props.stats,
    query:''
  }

  onChangeSelect = (e, data) => {
    if (data.value === "Descending") {
      this.setState({
        stats : this.state.stats.sort((a, b) => {
          let nameA = a.name.toLowerCase(),
              nameB = b.name.toLowerCase()
          if (nameA < nameB) 
              return -1
          if (nameA > nameB) 
              return 1
          return 0
      })
      })
    }

    if (data.value === "Ascending") {
      this.setState({
        stats:this.state.stats.sort((a, b) => {
          let nameA = a.name.toLowerCase(),
              nameB = b.name.toLowerCase()
          if (nameA > nameB) 
              return -1
          if (nameA < nameB) 
              return 1
          return 0
      })
      })
    }

    if (data.value === "Attack") {
      this.setState({
        stats:this.state.stats.sort((a, b) => {
          let attackA = a.attack
          let attackB = b.attack
          return attackB - attackA
      })
      })
    }

    if (data.value === "Sp") {
      this.setState({
        stats:this.state.stats.sort((a, b) => {
          let spA = a.sp
          let spB = b.sp
          return spB - spA
      })
      })
    }

    if(data.value === "Power"){
      this.setState({
        stats:[...this.props.stats].filter(item => item.atribute.includes('power'))
      })
    }

    if(data.value === "Technique"){
      this.setState({
        stats:[...this.props.stats].filter(item => item.atribute.includes('technique'))
      })
    }

    if(data.value === "Mind"){
      this.setState({
        stats:[...this.props.stats].filter(item => item.atribute.includes('mind'))
      })
    }

    if(data.value === "Heart"){
      this.setState({
        stats:[...this.props.stats].filter(item => item.atribute.includes('heart'))
      })
    }
    if(data.value === "Speed"){
      this.setState({
        stats:[...this.props.stats].filter(item => item.atribute.includes('speed'))
      })
    }
    if(data.value === "All"){
      this.setState({
        stats:[...this.props.stats]
      })
    }
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

  onChangeHandler = e => {
    this.setState({
      query : e.target.value,
    })
    if(e.target.value.length !== 0){
      this.setState({
      stats : this.props.stats.filter((item) =>{
        return item.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1      
        })
      })
    }else{
      this.setState({stats:this.props.stats, })
    }
  }

  render() {
    console.log('state stats',  this.state.stats);
    
    return (
      <div>
        <NavbarHome />
      <div className="card_main_div">

      <div className='card_header_top' >
      <div className='mask_card_header'></div>

      <div style={{width:"99.8%", height:"410px", overflow:"hidden", border:'1px solid white'}}>
        <img alt='' src='/assets/homeBackground3.jpg' style={{width:"100%",height:"100%", }}/>
      </div>

      <div className='card_promotion_wrapper'>
         <img src='/assets/animePromoton.jpg' style={{width:"500px", height:"200px", }} alt=''/>

         <div style={{width:"15%", height:"70%", position:"relative"}}>
           <img alt='' src='/assets/kon.png' style={{position:'absolute', top:'0',left:'0', width:"100%",height:"100%"}}/>
          <div>
            <span style={{position:'absolute', left:"-8px", top:"-10px",zIndex:'2',color:'black',fontSize:'18px', fontWeight:'bold'}}>Scroll<br/> down</span>
            <img alt='' src='/assets/cloudConversation.png' 
                 style={{width:"60%", height:"60%", position:'absolute', top:'-50px', left:"-60px"}}/> 
            </div> 
          </div>

        <img src='/assets/mayPromotion.jpg' style={{width:"600px", height:"200px", }} alt=''/>   
           
      </div>

      </div>  

        <div style={{position:"relative"}}>
        <img alt='' src='/assets/blueBar.png' style={{width:"100%", height:"50px"}}/>

          <HomeFilter
            query={this.state.query}
            stats={this.state.stats}
            onChangeHandler={this.onChangeHandler}
            options={this.state.options}
            options1={this.state.options1}
            options2={this.state.options2}
            onChangeSelect={this.onChangeSelect}/>

          <div className='card_wrapper'>

            {this.state.stats && this.state.stats.map((item) => {
                return (
                  <div className='card' key={item.id}>
                    <img className='card_Background' src={`${item.charImg}`} alt=''/>
                    <div className='char_name_wrapper'>
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
      <img alt='' src='/assets/shadow.png' 
      style={{width:"100%", height:"100px", position:'absolute', bottom:"0", left:"0"}}/>        
      </div>

      <Footer/>

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

  const filter = state.stats.filter(item => item.atribute === 'power')

  return {
    stats: state.stats, 
    power: filter,
    favorite:state.favorite
  }
}
export default connect(mapStateToProps, actions)(Home)