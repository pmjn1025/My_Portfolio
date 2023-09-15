import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
// 중요. 아래 링크 태그잘보기 여기서 걸면 아이디가 태그인곳까지 각각 걸어서 클릭시 보여준다.
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'

// 항상 컴포넌트는 대문자로
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const onClick = () => {
    setShowMenu((current) => false)
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo"></img>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          My Mentors
        </Link>
      </div>
      <button
        className="desktopMemuBtn"
        onClick={() => {
          document
            .querySelector('#contact')
            .scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me!
      </button>
      {/* ------------------------------ burger menu start ------------------------------*/}
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      ></img>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={onClick}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
          className="listItem"
          onClick={onClick}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="listItem"
          onClick={onClick}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={onClick}
        >
          My Mentors
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={onClick}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
