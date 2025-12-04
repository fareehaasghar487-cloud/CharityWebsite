import React from 'react'
import WhoWeAre from '../components/about/WhoWeAre'
import SandiInfo from '../components/about/SandiInfo'
import MissionVisionValues from '../components/about/MissionVisionValues'
import HowItWorks from '../components/about/HowItWorks'
import OversightCompliance from '../components/about/OversightCompliance'
import CallToAction from '../components/about/CallToAction'

const About = () => {
  return (
    <div>
        <WhoWeAre/>
        <SandiInfo/>
        <MissionVisionValues/>
        <HowItWorks/>
        <OversightCompliance/>
        <CallToAction/>
    </div>
  )
}

export default About