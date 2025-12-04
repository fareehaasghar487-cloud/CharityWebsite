import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturedCampaignsSection from '../components/home/FeaturedCampaignsSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ImpactShowcase from '../components/home/ImpactShowcase'
import PlatformForEveryone from '../components/home/PlatformForEveryone'
import TrustIndicatorBar from '../components/home/TrustIndicatorBar'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCampaignsSection />
      <HowItWorksSection />
      <ImpactShowcase />
      <PlatformForEveryone />
      <TrustIndicatorBar />
    </div>
  )
}

export default Home