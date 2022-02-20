import React from 'react'
import styled from 'styled-components'
import HeroBgd from '../images/curology-hero-bgd.webp'
import { Link } from 'react-router-dom'

const Hero = styled.div`
  background-image: url(${HeroBgd});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  height: 100vh;
`
const HeroContainer = styled.div`
  padding: 0 2rem;
  height: 100%;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #332E54;
`
const HeadText = styled.p`
  font-family: Georgia, TimesNewRoman, "Times New Roman", Times, Baskerville, serif;
`
const SubText = styled.p``
const HeroButton = styled(Link)``
const HeroSmall = styled.small``

const HeroSection = () => {
  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroContent>
            <HeadText>A custom bottle for your dark spots — and no one else’s</HeadText>
            <SubText>Get glowing skin with a powerful cream mixed for you.</SubText>
            <HeroButton to=''>Unlock your free offer</HeroButton>
            <HeroSmall></HeroSmall>
          </HeroContent>
        </HeroContainer>
      </Hero>
    </>
  )
}

export default HeroSection