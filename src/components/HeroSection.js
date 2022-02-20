import React from 'react'
import styled from 'styled-components'
import HeroBgd from '../images/curology-hero-bgd.webp'
import { Link } from 'react-router-dom'

const Hero = styled.div`
  background-image: url(${HeroBgd});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  height: 100vh;
`
const HeroContainer = styled.div`
  padding: 0 4rem;
  height: 100%;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #332E54;
  width: 30%;
  margin-right: auto;
`
const HeadText = styled.p`
  font-family: 'Roboto Serif', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`
const SubText = styled.p`
  margin-bottom: 2rem;
`
const HeroButton = styled(Link)`
  text-decoration: none;
  padding: 1.5rem;
  border-radius: 5px;
  width: 80%;
  background: #332E54;
  color: #fff;
  font-size: 70%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
const HeroSmall = styled.small`
  color: #332E54;
  font-weight: lighter;
  font-size: 70%;
  letter-spacing: .5px;
`

const HeroSection = () => {
  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroContent>
            <HeadText>A custom bottle for your dark spots — and no one else’s</HeadText>
            <SubText>Get glowing skin with a powerful cream mixed for you.</SubText>
            <HeroButton to=''>Unlock your free offer</HeroButton>
            <HeroSmall>30-day trial. Just cover $4.95 in shipping + handling</HeroSmall>
          </HeroContent>
        </HeroContainer>
      </Hero>
    </>
  )
}

export default HeroSection