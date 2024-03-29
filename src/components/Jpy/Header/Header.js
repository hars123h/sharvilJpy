import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
  const pageReload = ()=>{
    if(props.setPage)
    {
      props.setPage()
      window.location.reload(false)
    }
  }
  return (
    <>

      <header className="site-header" id="header">
        <nav className="navbar navbar-expand-lg transparent-bg static-nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="images/logo1.png" alt="logo" className="logo-default" />
              <img src="images/logo2.png" alt="logo" className="logo-scrolled" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav  ms-xl-auto navElementStyle jpyNavbar "  >
                <li className="nav-item">
                  <a className="nav-link  pagescroll otherLink" href="#heroSection">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pagescroll scrollupto otherLink" href="#about">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link pagescroll otherLink" href="#process">Process</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link pagescroll otherLink" href="#service">Services</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link pagescroll otherLink" href="#contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <p className="nav-link pagescroll "> <a href= "/" className='linkToJapan'>日本語</a>| <a  href="/Eng" className='linkToEng'>Eng</a></p>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--side menu open button--> */}
          <a href="javascript:void(0)" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
            <span></span> <span></span> <span></span>
          </a>
        </nav>
        {/* <!-- side menu --> */}
        <div className="side-menu opacity-0 gradient-bg">
          <div className="overlay"></div>
          <div className="inner-wrapper">
            <span className="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
            <nav className="side-nav w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link  pagescroll" href="#heroSection">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pagescroll scrollupto" href="#about">About Us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link pagescroll" href="#process">Process</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pagescroll" href="#service">Services</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link pagescroll" href="#contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <p className="nav-link pagescroll"> <a href= "/" className='linkToJapan'>日本語</a>|<a href="/Eng" >ENG</a></p>
                </li>
              </ul>
            </nav>
            {/* <div className="side-footer w-100">
              <ul className="social-icons-simple white top40">
                <li><a href="javascript:void(0)" className="facebook"><i className="fab fa-facebook-f"></i> </a> </li>
                <li><a href="javascript:void(0)" className="twitter"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="javascript:void(0)" className="insta"><i className="fab fa-instagram"></i> </a> </li>
              </ul>
              <p className="whitecolor">&copy; <span id="year"></span> Sharvil. Made With Love by Sharvil</p>
            </div> */}
          </div>
        </div>
        <div id="close_side_menu" className="tooltip"></div>
        {/* <!-- End side menu --> */}
      </header>
    </>
  )
}

export default Header
