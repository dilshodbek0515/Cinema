import React, { memo } from 'react'
import Hero from '../../components/hero/Hero'
import Reels from '../../components/reels/Reels'
const Home = () => {
  return (
    <div>
      <Hero />
      <Reels />
    </div>
  )
}

export default memo(Home)
