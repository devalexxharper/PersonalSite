import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(90deg, #050B04 34.9%, #072001 100%);
  color: #fff;
  display: flex;
  max-width: 1920px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 80px;
  font-family: 'Montserrat Subrayada';
  @media (max-width: 465px) {
    font-size: 100px;
  }
`
export const Description = styled.h2`
  font-size: 50px;
  font-family: 'Montserrat';
  font-weight: 300;
`
export const Links = styled.div`
  display: flex;
`
export const Link = styled.a`
  text-decoration: none;
  padding: 8px;
  margin-top: 8px;
  font-size: 40px;
`
