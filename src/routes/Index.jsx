import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Sessions from '../pages/sessions/Sessions'
import Tickets from '../pages/tickets/Tickets'
import Search from '../pages/search/Search'
import Sidebar from '../components/sidebar/Sidebar'
import Detail from '../pages/detail/Detail'
const Index = () => {
  const [sidebar, setSidebar] = useState(false)
  const [DarcMode, setDarcMode] = useState(false)
  return (
    <div className='relative'>
      <Sidebar
        DarcMode={DarcMode}
        setDarcMode={setDarcMode}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              DarcMode={DarcMode}
              setDarcMode={setDarcMode}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/search' element={<Search />} />
          <Route path='/movie/:id' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Index
