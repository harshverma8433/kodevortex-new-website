import CenterOfExcellance from './CenterOfExcellance'
import ContactForm from './ContactForm'
// import ContactUs from './ContactUs'
import FeatureSection from './FeatureSection'
// import Footer from './Footer'
import HeroParallax from './HeroParallax'
// import InfoSection from './InfoSection'
import PartnerWithUs from './PartnerWithUs'
// import Pricing from './Pricing'
import TechBanner from './TechBanner'
import TechnologyExpertise from './TechnologyExpertise'
import Testimonials from './Testimonials'
import TrainingApproach from './TrainingApproach'
const KodeBumps = () => {
  return (
    <div className='pt-32'>
        <HeroParallax/>
        <CenterOfExcellance/>
        {/* <InfoSection/>  */}
        <PartnerWithUs/>
        <TechnologyExpertise />
        <TrainingApproach />
        <TechBanner/>
        <FeatureSection/>
        {/* <Pricing/> */}
        <Testimonials/>
        <ContactForm/>
        {/* <ContactUs/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default KodeBumps