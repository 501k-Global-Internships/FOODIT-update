import React from 'react'
import VENDORNAV from '../layouts/'
import HERO from '../components/vendorUser/hero'
import FOOD from '../components/vendorUser/food'
import TESTIMONY from '../components/vendorUser/testimony'
import Footer from '../layouts/footer/footer'


export default function vendor() {
  return (
    <div>
        <VENDORNAV />
        <HERO />
        <FOOD />
        <TESTIMONY />
        <Footer />
    </div>
  )
}
