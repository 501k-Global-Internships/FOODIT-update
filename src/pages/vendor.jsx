import React from 'react'
import VENDORNAV from '../layouts/navbar/vendornav'
import HERO from '../components/vendorUser/hero'
import FOOD from '../components/vendorUser/food'
import TESTIMONY from '../components/vendorUser/testimony'
import FOOTER from '../layouts/footer/vendorfooter'

export default function vendor() {
  return (
    <div>
        <VENDORNAV />
        <HERO />
        <FOOD />
        <TESTIMONY />
        <FOOTER />
    </div>
  )
}
