import React from 'react'
import './about.css'
import Pic from '../../assets/IMG_5861.PNG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Pic} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>600+ hours of hands-on training</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ dynamic web applications created</small>
            </article>
          </div>

          <p> 
          Adaptable Software Engineer with experience in Object Oriented Programming, SDLC, agile project management, and full stack application development. Understanding of non-relational databases, and state management. Possess strong problem-solving abilities, a passion for continued learning, excellent attention to detail, and elite interpersonal communication skills.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About