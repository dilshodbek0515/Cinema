import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { FiSearch } from 'react-icons/fi'
import { IoMenu, IoMoon, IoSunny } from 'react-icons/io5'
import { RiCoupon3Line, RiTv2Fill } from 'react-icons/ri'
import { HiMiniDeviceTablet } from 'react-icons/hi2'
import Language from '../language/Language'
import { useTranslation } from 'react-i18next'
const Header = ({ sidebar, setSidebar, DarcMode, setDarcMode }) => {
  const { t } = useTranslation()
  const [lang, setLang] = useState(localStorage.getItem('i18nextLng') || 'ru')
  useEffect(() => {
    const value = localStorage.getItem('theme')
    if (value) {
      document.body.classList.add(value)
    }
  }, [])
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  const darkmode = () => {
    setDarcMode(!DarcMode)
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', '')
    }
  }
  return (
    <header className='w-full bg-primary dark:bg-gray-200'>
      <div className='flex items-center justify-between gap-10 container py-5 px-20 max-2xl:px-10'>
        <Link to={'/'}>
          <img className='w-28 max-md:w-20' src={logo} alt='logo' />
        </Link>
        <ul className='flex gap-20 max-xl:gap-5 max-md:hidden '>
          <li className='font-medium text-xs text-navColor'>
            <NavLink to={'/'}>
              <span className='flex flex-col items-center justify-center gap-2 text-lg max-lg:text-sm dark:text-black'>
                <RiTv2Fill className='text-2xl' />
                {t('header.home')}
              </span>
            </NavLink>
          </li>
          <li className='font-medium text-xs text-navColor'>
            <NavLink to={'/sessions'}>
              <span className='flex flex-col items-center justify-center gap-2 text-lg max-lg:text-sm dark:text-black'>
                <HiMiniDeviceTablet className='text-2xl' />
                {t('header.cate')}
              </span>
            </NavLink>
          </li>
          <li className='font-medium text-xs text-navColor'>
            <NavLink to={'/tickets'}>
              <span className='flex flex-col items-center justify-center gap-2 text-lg max-lg:text-sm dark:text-black'>
                <RiCoupon3Line className='text-2xl' />
                {t('header.janr')}
              </span>
            </NavLink>
          </li>
          <li className='font-medium text-xs text-navColor'>
            <NavLink to={'/search'}>
              <span className='flex flex-col items-center justify-center gap-2 text-lg max-lg:text-sm dark:text-black'>
                <FiSearch className='text-2xl' />
                {t('header.search')}
              </span>
            </NavLink>
          </li>
        </ul>
        <div className='flex gap-5 items-center'>
          <Language lang={lang} setLang={setLang} />
          <button
            onClick={() => darkmode()}
            className='w-10 h-10 rounded-3xl border border-gray-400 flex items-center justify-center max-lg:w-8 max-lg:h-8 max-md:hidden'
          >
            {DarcMode ? (
              <IoSunny className='text-navColor text-2xl max-lg:text-sm' />
            ) : (
              <IoMoon className='text-navColor text-2xl max-lg:text-sm' />
            )}
          </button>

          <button className='w-32 h-12 bg-red text-lg rounded-full text-white hover:bg-transparent hover:text-red hover:border border-red duration-500 max-xl:max-w-20 max-xl:text-sm max-lg:w-16 max-lg:h-8 max-md:hidden '>
            {t('header.login')}
          </button>
          <IoMenu
            onClick={() => toggleSidebar(true)}
            className='hidden text-red text-2xl cursor-pointer max-md:block'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
