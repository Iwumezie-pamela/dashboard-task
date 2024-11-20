import React from 'react'
import TopBar from './Home/TopBar'
import { sectionPadding } from './styles/styles'
import Analytics from './Home/Analytics'
import FxRate from './Home/FxRate'
import Transactions from './Home/Transactions'

function Home() {
  return (
    <main className={`${sectionPadding} pt-[100px]`}>
      <TopBar/>
      <Analytics/>
      <FxRate/>
      <Transactions/>
    </main>
  )
}

export default Home