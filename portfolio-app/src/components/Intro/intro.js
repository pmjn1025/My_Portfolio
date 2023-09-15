import React from 'react'
import './intro.css'
//import bg from '../../assets/image.png'
import bg from '../../assets/developer.jpg'
import btnimg from '../../assets/hireme.png'
// npm i react-scroll 해야함.
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">안녕하세요!,</span>
        <span className="introtext">
          <span className="introName">SagoMucci</span>
          <span className="introTextElse">입니다.</span>
          <br />
          <span className="introTextElse">저는</span>{' '}
          <span className="introJob">웹 개발자</span>
          <span className="introTextElse">입니다.</span>
        </span>
        <p className="introPara">
          스스로에게 로직과 코드의 의미를 질문하고 이해하는 개발자입니다.
          <br /> 잘 부탁드립니다.
        </p>
        <Link>
          <button className="btn">
            <img src={btnimg} alt="Hire Me" className="btnImg" />
            Hire Me!
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
