import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

class NavbarHome extends Component {

  state = {
      scrolling : null,
      showMenu:false
  }  

  onScrollHandler = () => {
    let scroll = 0  
    scroll = Math.floor(window.pageYOffset);
    if (scroll > 0) {
      this.setState({
          scrolling : true
      })
    } 
    // else {
    //     this.setState({
    //         scrolling : null
    //     })
    // }
  }

  componentDidMount(){
    document.addEventListener('scroll', this.onScrollHandler)
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScrollHandler);
  }

  toggleMenu = () => {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }
  render() {
      
    return (
      <div className='navigation_wrapper'>
        <header className={this.state.scrolling ? 'headerOnScroll' : null}>
            <img src='/assets/bleachStyle1.jpg' alt='' className='banner'/>
            <div className='logo'><img src='/assets/logo.png' alt=''/></div>
            <nav className='nav_header'>

                <div className='hamburgerMenu' onClick={this.toggleMenu}
                style={{display: this.state.scrolling ? 'block' : 'none'}}></div>

                
                
                <ul className='navigation_ul_tag'>
                   <Link to='/'><li><span className='navigation_a_tag active' >Home</span></li> </Link>
                   <Link to='/gacha'><li><span className='navigation_a_tag'>Gacha</span></li></Link>
                   <Link to='/pvp'><li><span className='navigation_a_tag'>PVP teams</span></li></Link>
                </ul>
            </nav>
        </header>
        {this.state.showMenu && 
                <div className='hamburger_menu_wrapper'>
                  <Link to='/'><li><span className='hamburger_menu_item active' >Home</span></li> </Link>
                  <Link to='/gacha'><li><span className='hamburger_menu_item'>Gacha</span></li></Link>
                  <Link to='/pvp'><li><span className='hamburger_menu_item'>PVP teams</span></li></Link>
                </div>
                }
      </div>
    )
  }
}
export default NavbarHome

