import React from 'react'
import FoodMenu from '../../layouts/foodMenu/foodMenu'
import PersonalizedWebsiteSection from '../../layouts/personalizedWebsiteSection/personalizedWebsiteSection'
import NewsletterSignup from '../../layouts/newsletterSignup/newsletterSignup'
import Testimonials from '../../layouts/testimonials/testimonials'
import RiderVendorSignup from '../../layouts/riderVendorSignup/riderVendorSignup'
import OurVendors from '../../layouts/ourVendors/ourVendors'
import HomePage from '../../layouts/homePage/homePage'
import FoodBuddy from '../../layouts/foodBuddy/foodBuddy'



export default function landingpage() {
  return (
    <div>
       <HomePage />
       <FoodMenu />
       <OurVendors />
       <FoodBuddy />
       <RiderVendorSignup />

       <Testimonials />
       <PersonalizedWebsiteSection />
       <NewsletterSignup />
    </div>
  )
}