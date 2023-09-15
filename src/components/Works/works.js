import React from 'react'
import './works.css'
//import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'
import ddangImg from '../../assets/ddangImg.png'
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">사고뭉치가 작업한 결과물입니다.</span>
      <div className="worksImgs">
        <a href="https://github.com/DdangDdang5/Backend">
          <img src={ddangImg} alt="portfolio1Img" className="worksImg" />
        </a>
        <img src={portfolio2} alt="portfolio2Img" className="worksImg" />
        <img src={portfolio3} alt="portfolio3Img" className="worksImg" />
        <img src={portfolio4} alt="portfolio4Img" className="worksImg" />
        <img src={portfolio5} alt="portfolio5Img" className="worksImg" />
        <img src={portfolio6} alt="portfolio6Img" className="worksImg" />
      </div>
      <button className="worksBtn">더보기</button>
    </section>
  )
}

export default Works
