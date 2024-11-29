import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Sessions from '../pages/sessions/Sessions'
import Tickets from '../pages/tickets/Tickets'
import Search from '../pages/search/Search'
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Index
