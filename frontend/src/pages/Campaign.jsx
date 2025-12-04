import React from 'react'
import CampaignHeader from '../components/compaign/CampaignHeader'
import HowItWorks from '../components/about/HowItWorks'
import CampaignCard from '../components/compaign/CampaignCard'
import Testimonials from '../components/compaign/Testimonials'
import CTASection from '../components/compaign/CTASection'
const Campaign = () => {
  return (
   <>
   <CampaignHeader/>
   <HowItWorks/>
   <CampaignCard/>
   <Testimonials/>
   <CTASection/>
   </>
  )
}

export default Campaign