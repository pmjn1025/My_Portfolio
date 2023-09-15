import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Experience</span>
      <span className="skillDesc">
        3번의 프로젝트와 1번의 실전프로젝트를 통해서 코드 한줄 한줄에는 반드시
        이유가 있다는 것을 알게되었습니다. 프로그래밍을 하다보니 코딩이
        재밌었고, 저의 로직을 통해서 나온 실전 프로젝트가 사용자들에게 도움을
        주는 것을 보니 스스로의 성취감과 재미가 2배가 되는 것을 경험했습니다.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JAVA</h2>
            <p>JAVA demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Spring Boot</h2>
            <p>Spring Boot Demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>REACT JS</h2>
            <p>REACT JS Demo Text</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
