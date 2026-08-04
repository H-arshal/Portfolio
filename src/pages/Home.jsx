import React from 'react';
import { Element } from 'react-scroll';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DevStack from '../components/DevStack';
import WhoAmI from '../components/WhoAmI';
import MyResume from '../components/MyResume';
import ContactMe from '../components/ContactMe';
import Projects from '../components/Projects';
import Certificate from '../components/Certificates';
import { Reveal } from '../components/Reveal';

function Home() {
  return (
    <div className='home'>
      <Header />
      <Hero />
      
      <Element name="devstack">
        <Reveal>
          <DevStack />
        </Reveal>
      </Element>
      
      <Element name="myself">
        <Reveal>
          <WhoAmI />
        </Reveal>
      </Element>
      
      <Element name="resume">
        <Reveal>
          <MyResume />
        </Reveal>
      </Element>
      
      <Element name='project'>
        <Reveal>
          <Projects />
        </Reveal>
      </Element>
      
      <Element name="certificates">
        <Reveal>
          <Certificate />
        </Reveal>
      </Element>
      
      <Element name="contact">
        <Reveal>
          <ContactMe />
        </Reveal>
      </Element>
    </div>
  );
}

export default Home;
