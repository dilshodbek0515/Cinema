import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Layout = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
