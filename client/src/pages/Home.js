import React from 'react'
import Header from '../components/Header'
import Courosel from '../components/Courosel'
import DevStack from '../components/DevStack'
import WhoAmI from '../components/WhoAmI'
import MyResume from '../components/MyResume'
import ContactMe from '../components/ContactMe'

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className="introduction flex-with-center" style={{ backgroundImage: `url('./images/introBg.svg')` }}>
        <div>
          <h1>Harshal.</h1>
          <div className='intro-content d-flex justify-content-between' >
            <p>Java Developer< br />Spring Boot Developer</p>
            <button className='primary-button' href=''>Get Started</button>
          </div>
        </div>
      </div>
      <Courosel />
      <div className='wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#12161a" fill-opacity="1" d="M0,64L26.7,80C53.3,96,107,128,160,165.3C213.3,203,267,245,320,245.3C373.3,245,427,203,480,176C533.3,149,587,139,640,149.3C693.3,160,747,192,800,218.7C853.3,245,907,267,960,277.3C1013.3,288,1067,288,1120,272C1173.3,256,1227,224,1280,197.3C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
      </div>
      <br />
      <br />
      <DevStack />
      <div className='wave'>
        <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#12161a" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,181.3C672,192,768,256,864,277.3C960,299,1056,277,1152,245.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
      <WhoAmI />
      <div className='wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#12161a" fill-opacity="1" d="M0,64L26.7,80C53.3,96,107,128,160,165.3C213.3,203,267,245,320,245.3C373.3,245,427,203,480,176C533.3,149,587,139,640,149.3C693.3,160,747,192,800,218.7C853.3,245,907,267,960,277.3C1013.3,288,1067,288,1120,272C1173.3,256,1227,224,1280,197.3C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
      </div>
      <br />
      <br />
      <MyResume />
      <div className='wave'>
        <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#12161a" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,181.3C672,192,768,256,864,277.3C960,299,1056,277,1152,245.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
      <ContactMe />

    </div>
  )
}
export default Home