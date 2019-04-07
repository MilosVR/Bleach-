import React, { Component } from 'react'
import './Home_Filter.css'
import { Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home_Filter extends Component {

  render() {
    return (
        <div className='card_filter'>

            <div className='mask_card_filter'></div>

            <div className='card_filter_search'>

            <div style={{width:"400px", height:"400px", position:'relative'}}>
            <img src='/assets/NyIchigo.png' alt='' style={{position:'absolute', width:'500px', height:'500px', left:"0", top:"-150px"}}/>
            </div>

            <div style={{marginTop:"50px",color:'steelBlue'}}>
             <div style={{margin:"50px"}}><span style={{fontFamily:"Black Ops One, cursive",fontSize:'44px'}}>Characters</span></div>
            <form className='card_filter_form' autoComplete='false' >
              <input
              name='characters'
              onChange={this.props.onChangeHandler} 
              value={this.props.query}
              placeholder='Searching...' 
              className='card_filter_input'/>
              <button className='card_filter_button'>Search</button>
            </form>
            <div style={{margin:"40px"}}>
            <span style={{margin:"25px"}}>Available on :</span>
            <div style={{width:'300px', display:"flex", justifyContent:"space-around",margin:'0 auto'}}>
            <img alt='' src='/assets/bleachGoogle.png' style={{width:"120px", height:"40px"}}/>
            <img alt='' src='/assets/bleachIos.png' style={{width:'120px', height:"40px"}}/>
            </div>
            </div>

            </div>

            <div style={{width:"400px", height:"400px", position:'relative'}}>
            <img src='/assets/aizen3rdFusion.png' alt='' style={{position:'absolute', width:'500px', height:'500px', right:"0", top:"-150px"}}/>
            </div>

            </div>

            <div className='card_filter_main_div'>
            <div className='card_filter_wrapper'>
            <span>Filter by</span>

            <div style={{marginLeft:'5px'}}> 
            <Select  placeholder='Rarity' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options}
            />
            </div>

            <div style={{marginLeft:'15px'}}>
            <Select  placeholder='Attack/Sp' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options1}
            />  
            </div>

            <div style={{marginLeft:'15px'}}>
            <Select  placeholder='Atribute' style={{width:'250px', fontSize:'16px'}} 
            onChange={this.props.onChangeSelect}
            fluid
            selection
            options={this.props.options2}
            />  
            </div>

            <div>
            <Link to='/favorite' style={{
              background:"dodgerBlue", 
              color:'white',
              width:"120px",
              height:"45px",
              cursor:"pointer",
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:'5px',
              fontSize:"16px",
              color:"white",
              fontWeight:'bold',
              }}>Favorite ({this.props.favorite.length})
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