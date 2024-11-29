import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Layout = ({ sidebar, setSidebar, DarcMode, setDarcMode }) => {
  return (
    <div>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        DarcMode={DarcMode}
        setDarcMode={setDarcMode}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
