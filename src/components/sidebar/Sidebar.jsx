import React, { useState } from 'react'
import sidebar_logo from '../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { RiCoupon3Line, RiTv2Fill } from 'react-icons/ri'
import { HiMiniDeviceTablet } from 'react-icons/hi2'
import { FiSearch } from 'react-icons/fi'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { IoIosCloseCircleOutline } from 'react-icons/io'
const Sidebar = ({ sidebar, setSidebar, DarcMode, setDarcMode }) => {
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
    <div
      className={` w-[100%] flex flex-col gap-10 h-full bg-gray-900 fixed z-10 top-0 left-0 transform  p-5 dark:bg-neutral-400 min-[768px]:hidden
        ${sidebar ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out max-w-sm`}
    >
      <div className='flex justify-between'>
        <Link to={'/'} onClick={() => setSidebar(false)}>
          <img
            className='w-32 max-sm:w-20'
            src={sidebar_logo}
            alt='sidebar_logo'
          />
        </Link>
        <p onClick={() => setSidebar(false)}>
          <IoIosCloseCircleOutline className='text-red text-2xl' />
        </p>
      </div>
      <ul className='flex flex-col gap-20 max-xl:gap-5 '>
        <li className='font-medium text-xs text-navColor'>
          <NavLink to={'/'} onClick={() => setSidebar(false)}>
            <span className='flex flex-col justify-center gap-2 text-lg dark:text-primary'>
              <RiTv2Fill className='text-2xl' /> Афиша
            </span>
          </NavLink>
        </li>
        <li className='font-medium text-xs text-navColor'>
          <NavLink to={'/sessions'} onClick={() => setSidebar(false)}>
            <span className='flex flex-col justify-center gap-2 text-lg dark:text-primary'>
              <HiMiniDeviceTablet className='text-2xl' /> Сеансы
            </span>
          </NavLink>
        </li>
        <li className='font-medium text-xs text-navColor'>
          <NavLink to={'/tickets'} onClick={() => setSidebar(false)}>
            <span className='flex flex-col justify-center gap-2 text-lg dark:text-primary'>
              <RiCoupon3Line className='text-2xl' /> Билеты
            </span>
          </NavLink>
        </li>
        <li className='font-medium text-xs text-navColor'>
          <NavLink to={'/search'} onClick={() => setSidebar(false)}>
            <span className='flex flex-col  justify-center gap-2 text-lg dark:text-primary'>
              <FiSearch className='text-2xl' /> Поиск
            </span>
          </NavLink>
        </li>
      </ul>

      <div
        className='flex items-center gap-5 flex-wrap'
        onClick={() => setSidebar(false)}
      >
        <button
          onClick={() => darkmode()}
          className='w-10 h-10 rounded-3xl border border-gray-400 flex items-center justify-center dark:border-black'
        >
          {DarcMode ? (
            <IoSunny className='text-navColor text-xl  dark:text-black' />
          ) : (
            <IoMoon className='text-navColor text-xl  dark:text-black' />
          )}
        </button>

        <button className='w-44 h-12 bg-red text-lg rounded-full text-white hover:bg-transparent hover:text-red hover:border border-red duration-500 max-xl:max-w-20 max-xl:text-sm max-lg:w-20 max-lg:h-8 '>
          Войти
        </button>
      </div>
    </div>
  )
}

export default Sidebar
