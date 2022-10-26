import React from 'react'
import { Icon } from '@iconify/react'

export default function Container() {
  const insta = 'https://www.instagram.com/dev.harper/'
  const linkedin = 'https://www.linkedin.com/in/devalexxharper/'
  const git = 'https://github.com/devalexxharper'

  return (
    <>
      <div className="container">
        <h1>Alexx Harper</h1>
        <h2>in development</h2>
        <div>
          <a href={insta} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:instagram-fill' color='#fff' />
          </a>
          <a href={linkedin} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:linkedin-box-fill' color='#fff' />
          </a>
          <a href={git} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:github-fill' color='#fff' />
          </a>
        </div>
      </div>
    </>
  )
}


