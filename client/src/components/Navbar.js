import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

const logo = "/assets/logo/Homsia.png";

const Navbar = () => {
    const [changeNavColor, setChangeNavColor] = useState(false);
    const [changeHamburgerColor, setChangeHamburgerColor] = useState(false)
    const [openMobileNav, setOpenMobileNav] = useState(false)

    // changing navbar and hamburger color on scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 60){
            setChangeNavColor(true)
            setChangeHamburgerColor(true)
        } else{
            setChangeNavColor(false)
            setChangeHamburgerColor(false)
        }
    })

    // opening mobile navbar and changing hamburger color on click
    const hamburger = document.getElementById('hamburger');
    hamburger && hamburger.addEventListener("click", () => {
        setOpenMobileNav(!openMobileNav)
        setChangeHamburgerColor(true)
        if(openMobileNav && window.scrollY < 60){
            setChangeHamburgerColor(false)
        }
    })
        
    return (
        <nav className={changeNavColor ? "navbar colorChange": "navbar"} id="nav">
            <div className="container-site flex justify-between items-center py-6">
              <Link to="/"><img className="logo h-10 w-24 min-w-[96px]" src={logo} alt="homesia"/></Link>
              <ul className="nav-links gap-5 hidden md:flex">
                  <li className="capitalize font-medium" id="header"><a href="/#home">home</a></li>
                  <li className="capitalize font-medium" id="header"><a href="/#about">about</a></li>
                  <li className="capitalize font-medium" id="header"><a href="/#featured">featured</a></li>
                  <li className="capitalize font-medium" id="header"><a href="/#services">services</a></li>
                  <li className="capitalize font-medium" id="header"><a href="/#team">team</a></li>
                  <li className="capitalize font-medium" id="header"><a href="/#contact">contact</a></li>
              </ul>
              <div className="hamburger cursor-pointer md:hidden z-50" id="hamburger">
                  <div className={changeHamburgerColor ? "hamburger-dark" : "hamburger-light"} id="line2"></div>
                  <div className={changeHamburgerColor ? "hamburger-dark" : "hamburger-light"} id="line2"></div>
              </div>
            </div>
            <div className={openMobileNav ? "mobile-nav-open" : "mobile-nav"}>
                <ul className="nav-links gap-10 flex flex-col md:hidden text-right" id="header">
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}} href="/#home">home</a></li>
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}} href="/#about">about</a></li>
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}}  href="/#featured">featured</a></li>
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}}  href="/#services">services</a></li>
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}}  href="/#team">team</a></li>
                    <li className="capitalize font-medium"><a onClick={() => {setOpenMobileNav(false)}}  href="/#contact">contact</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;