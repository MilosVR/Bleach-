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

  // onLoadHandler = id => {
  //   if (id === 2) {
  //     console.log(document.querySelector('.char_name_span'));
  //     return document.querySelector('.char_name_span').style.color = 'blue'
  //   }
  // }
  // componentDidMount(){
  //   this.onLoadHandler()
  // }
 

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
    return (
      <div>
        <NavbarHome />
      <div className="card_main_div">

      <div className='card_header_top' >
      
      <div className='mask_card_header'></div>

      <div className='main_home_background'></div>

      <div className='header_bar_description'>
      <div className='header_bar_description_inner'>
        <div className='header_bar_description_inner_div1'>
          <img src='/assets/wordwide.png' alt=''/>
            <div>
            <h3 style={{color:"white", width:'100px'}}>Campaign:</h3>
            <p style={{fontSize:'16px', color:'dodgerblue'}}>
            39 Million Worldwide Downloads Celebration on now!<br/> 
            Loads of promotional content awaits you, including the opportunity to earn up to 50 Spirit Orbs!
            </p> 
            </div>
        </div>
      <div className='header_bar_description_inner_div2'>

      <div className='social_icons'>

      <div style={{margin:'10px'}}>Follow us on :</div>

      <div style={{display:"flex", }}>
      <div className='social_icon_image'>
      <img src='/assets/facebook1.png' alt=''/> 
      </div>
      
      <div className='social_icon_image'>
      <img src='/assets/youtube1.png'  alt=''/> 
      </div>

      <div className='social_icon_image'>
      <img src='/assets/twiter1.png'  alt=''/> 
      </div>

      <div className='social_icon_image google_icon'>
      <img src='/assets/google.png' style={{width:'40px',height:'40px'}} alt=''/> 
      </div>
      </div>
      
      </div>

      </div>
      </div>
      </div>

      <div className='header_bottom_description'>

      <div className='header_bottom_description_inner'>
      <img src='/assets/CFOW.png' alt=''/>
      </div>

      <div className='header_bottom_description_news'>
      <h3>News</h3>
      <p>
        Join the KGS crew in some live Co-Op on the KLabGames booth stage at Middle East Film and Comic Con now! @MEFCC
        You can also catch a livestream of the event here! 
        <br/><a href='https://youtu.be/QnstL2q3mvU'>Link</a>
      </p>
      </div>
      <div className='header_bottom_description_recent'>
      <h3>Recent</h3>
      <p>
      Bleach: Brave Souls is at the Middle East Film & Comic Con this week! Celebrate with a special login bonus and more! 
      <a href='http://hyperurl.co/1j7cnj '> http://hyperurl.co/1j7cnj </a>
      </p>
      </div>
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