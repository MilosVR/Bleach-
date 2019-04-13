import React, { Component } from 'react'
import './Home_Filter.css'
import { Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home_Filter extends Component {

  render() {
    return (
        <div className='card_filter'>

            <div className='card_filter_search' style={{overflow:"hidden"}}>

            <div className='search_filter_wrapper'></div>

            <div className='card_filter_search_image_1'>
            <img src='/assets/NyIchigo.png' alt='' style={{position:'absolute', width:'500px', height:'500px', left:"0", top:"-150px"}}/>
            </div>

            <div className='search_form_wrapper' >

             <div style={{margin:"20px"}} className='search_form_title'>
             <p style={{fontFamily:"Black Ops One, cursive",fontSize:'44px',zIndex:"100"}}>Characters</p>
             </div>

            <form className='card_filter_form' autoComplete='false' >
              <input
              name='characters'
              onChange={this.props.onChangeHandler} 
              value={this.props.query}
              placeholder='Searching...' 
              className='card_filter_input'/>
              <button className='card_filter_button'>Search</button>
            </form>

            <div style={{margin:'20px'}} className='search_filter_description_wrapper'>
              <div className='search_filter_description'>Available on :</div>
              <div style={{width:'300px', display:"flex", justifyContent:"space-around",margin:'0 auto',}}>
              <img alt='' src='/assets/bleachGoogle.png' style={{width:"120px", height:"40px",zIndex:"10"}}/>
              <img alt='' src='/assets/bleachIos.png' style={{width:'120px', height:"40px", zIndex:"10"}}/>
              </div>
            </div>

            </div>

            <div className='card_filter_search_image_2'>
            <img src='/assets/aizen3rdFusion.png' alt='' style={{position:'absolute', width:'500px', height:'500px', right:"0", top:"-150px"}}/>
            </div>

            </div>

            <div className='card_filter_main_div'>
            <div className='card_filter_wrapper'>
            <span>Filter by</span>

            <div  className='first_card_filter'> 
            <Select  placeholder='Rarity' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options}
            />
            </div>

            <div  className='second_card_filter'>
            <Select  placeholder='Attack/Sp' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options1}
            />  
            </div>

            <div  className='third_card_filter'>
            <Select  placeholder='Atribute' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options2}
            />  
            </div>

            
            <div  className='favorite_button' >
              <Link to='/favorite' style={{color:"white",width:"250px"}}>  
                Favorite ({this.props.favorite.length})
              </Link>  
            </div>
              

            </div>

            </div>
        </div>

    )
  }
}
const actions = {

}
const mapStateToProps = state => {
  const filter = state.stats.map(item => item.name)
  return { 
    rarity : filter,
    stats : state.stats,
    favorite:state.favorite
  }
}

export default  connect(mapStateToProps, actions)(Home_Filter) 