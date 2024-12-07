import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import footer_logo from '../../assets/images/footer_logo.svg'
import google_play from '../../assets/images/play.png'
import app_store from '../../assets/images/store.png'
import {
  RiBasketballLine,
  RiClapperboardLine,
  RiFileList2Line,
  RiMovie2Line,
  RiMovieLine,
  RiQuestionLine,
  RiShiningLine,
  RiYoutubeLine
} from 'react-icons/ri'
import { FiPhone } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
import { PiFacebookLogoBold } from 'react-icons/pi'
import { useTranslation } from 'react-i18next'
const Footer = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <footer className='w-full bg-[#111111] dark:bg-gray-200'>
      <div className='container py-10 px-20 h-auto flex justify-between gap-20 flex-wrap max-lg:px-10'>
        <div className='flex flex-col gap-3'>
          <a href='#'>
            <img className='w-14 mb-8' src={footer_logo} alt='img' />
          </a>
          <NavLink>
            <img className='w-40 h-12' src={google_play} alt='img' />
          </NavLink>
          <NavLink>
            <img className='w-40 h-12' src={app_store} alt='img' />
          </NavLink>
        </div>
        <div className='flex flex-col gap-5'>
          <h3 className='text-lg text-white dark:text-black'>
            {t('footer.about')}
          </h3>
          <NavLink className='flex items-center gap-2'>
            <RiFileList2Line className='text-red text-2xl hover:animate-spinY' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.public')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <RiShiningLine className='text-red text-2xl hover:animate-spinY' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.reck')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <RiQuestionLine className='text-red text-2xl hover:animate-spinY' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.faq')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <FiPhone className='text-red text-2xl hover:animate-spinY' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.contact')}
            </span>
          </NavLink>
        </div>
        <div className='flex flex-col gap-5'>
          <h3 className='text-lg text-white dark:text-black'>
            {t('footer.categore')}
          </h3>
          <NavLink className='flex items-center gap-2 '>
            <RiMovieLine className='text-red text-2xl hover:animate-spinY ' />
            <span className='text-navColor text-md  dark:text-black'>
              {t('footer.kino')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <RiClapperboardLine className='text-red text-2xl  hover:animate-spinY ext-2xl' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.teatr')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <RiMovie2Line className='text-red text-2xl hover:animate-spinY ' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.konsert')}
            </span>
          </NavLink>
          <NavLink className='flex items-center gap-2'>
            <RiBasketballLine className='text-red text-2xl hover:animate-spinY' />
            <span className='text-navColor text-md dark:text-black'>
              {t('footer.sport')}
            </span>
          </NavLink>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg text-white mb-5 dark:text-black'>
            {t('footer.f_contact')}
          </h3>
          <a
            className='text-lg text-red dark:text-black'
            href='tel:+998(95)8973338 dark:text-black'
          >
            +998 (95) 897-33-38
          </a>
          <h3 className='text-lg text-white mt-16 dark:text-black'>
            {t('footer.ceti')}
          </h3>
          <div className='flex gap-5 mt-4'>
            <IoLogoInstagram className='text-red text-2xl hover:animate-spinY' />
            <PiFacebookLogoBold className='text-red text-2xl hover:animate-spinY' />
            <RiYoutubeLine className='text-red text-2xl hover:animate-spinY' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
