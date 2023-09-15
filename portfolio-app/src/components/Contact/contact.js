import React, { useRef } from 'react'
import './contact.css'
import hanghae from '../../assets/hanghae.png'
import nomad from '../../assets/nomad.jpg'
import sparta from '../../assets/spartacoding.jpg'
import lifecoding from '../../assets/lifecoding.jpg'
import factbookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram.png'
import twitterIcon from '../../assets/twitter.png'
import youtubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ug8kqm7',
        'template_nejcvzf',
        form.current,
        'ucK9vQdpEZtfDUqgP',
      )
      .then(
        (result) => {
          e.target.reset()
          alert('연락주셔서 정말 감사합니다!!.')
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Mentors</h1>
        <p className="clientDesc">
          저에게 도움이 많이되었던 분들을 소개합니다.
        </p>
        <div className="clientImgs">
          <img src={hanghae} alt="hanghaeImg" className="clientImg" />
          <img src={nomad} alt="nomadImg" className="clientImg" />
          <img src={sparta} alt="spartaImg" className="clientImg" />
          <img src={lifecoding} alt="lifecodingImg" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me!</h1>
        <span className="contactDesc">
          어떤 것이든 저에게 말씀하시고 싶은 부분이 있으시다면 연락주세요!
        </span>
        <form action="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="이름"
            name="userName"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="이메일"
            name="userEmail"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="메시지를 작성해주세요"
            required
          ></textarea>
          <div>
            <button type="submit" value="Send" className="submitBtn">
              메시지 보내기
            </button>
          </div>
          <div className="links">
            <img src={factbookIcon} alt="factbookIcon" className="link" />
            <img src={twitterIcon} alt="twitterIcon" className="link" />
            <img src={youtubeIcon} alt="youtubeIcon" className="link" />
            <img src={instagramIcon} alt="instagramIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
