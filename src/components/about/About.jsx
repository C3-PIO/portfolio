import React from 'react'
import './about.css'
// Import Image Here
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
            <img src='' alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>___ years working experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quaerat aut. Exercitationem numquam eveniet inventore commodi tenetur enim, neque odit libero veniam adipisci laudantium voluptatibus consectetur amet ducimus, maiores quia?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About