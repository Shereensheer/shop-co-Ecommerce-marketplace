"use client"

import React from 'react'
import Hero from './hero/page'
import ClientReviews from './testimonial/page'
import ProductCards from './pic-card/page'
import Topselling from './topselling/page'
import Page from './sign-out/[[...sign-out]]/page'

export default function Home() {
  return (
    <div>
  
<Hero />

<ProductCards />
<Topselling />
<ClientReviews />
<Page />
      </div>
  )
}
