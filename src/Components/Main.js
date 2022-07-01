import React from 'react'
import { Icon } from '@iconify/react'
import * as H from './mainStyle'

export default function Main() {
  const insta = 'https://www.instagram.com/dev.harper/'
  const linkedin = 'https://www.linkedin.com/in/devalexxharper/'
  const git = 'https://github.com/devalexxharper'

  return (
    <>
      <H.Container className="container">
        <H.Title>Alexx Harper</H.Title>
        <H.Description>in development</H.Description>
        <H.Links>

          <H.Link href={insta} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:instagram-fill' color='#fff' />
          </H.Link>
          <H.Link href={linkedin} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:linkedin-box-fill' color='#fff' />
          </H.Link>
          <H.Link href={git} target={'_blank'}>
            <Icon className="ico" icon='akar-icons:github-fill' color='#fff' />
          </H.Link>
        </H.Links>
      </H.Container>
    </>
  )
}


