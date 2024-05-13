import {Component} from 'react'
import {FiMenu} from 'react-icons/fi'
import { RxCross1 } from "react-icons/rx";
import {Link} from 'react-scroll'
import './index.css'

class Header extends Component {
  state = {displayNavbar: false}

  onClickMenu = () => {
    this.setState(prevState => ({displayNavbar: !prevState.displayNavbar}))
  }

  onClickCross = () => {
    this.setState({displayNavbar: false})
  }


 render() {
    const {displayNavbar} = this.state

    return (
      <div>
        <div className="header-con">
          <div>
              <img
                className="header-website-logo"
                src="https://res.cloudinary.com/dw6hgsfbk/image/upload/v1710940404/123-01_siohnb.png"
                alt="website logo"
              />
        
          </div>
          <div className="tabs-con" >
             <Link activeClass='active' to = 'home' spy = {true} offset = {-100} duration={500}className="list-item">Home</Link>
             <Link className="list-item">
                About
              </Link>
              <Link className='list-item'>
                Portfolio
              </Link>
              <Link className='list-item'>Skills</Link>
              <Link className='list-item'>Contact</Link>
          </div>
        </div>
        <div className="navbar-responsive-con">
          <div className="header-navbar-con">
            <img
              className="header-website-logo"
              src="https://res.cloudinary.com/dw6hgsfbk/image/upload/v1710940404/123-01_siohnb.png"
              alt="login website logo"
            />
            <button
              onClick={this.onClickMenu}
              className="menu-icon-btn"
              type="button"
            >
              <FiMenu className="menu-icon" />
            </button>
          </div>
          {displayNavbar && (
            <>
              <div className="header-navbar-tab-con">
                <div>
                  <div className='mobile_view_navbar'>
                    <Link className='list-item mobile_li'>Home</Link>
                    <Link className="list-item mobile_li">
                About
              </Link>
              <Link className='list-item mobile_li'>
                Portfolio
              </Link>
              <Link className='list-item mobile_li'>Skills</Link>
              <Link className='list-item mobile_li'>Contact</Link>
                  </div>
                  </div>
                
                <div className="header-navbar-tabs-con">     
                  <button
                    onClick={this.onClickCross}
                    className="cross-icon-btn"
                    type="button"
                  >
                    <RxCross1 className="cross" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default (Header)