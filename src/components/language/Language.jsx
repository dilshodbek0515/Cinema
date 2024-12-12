import { changeLanguage } from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import flag_ru from '../../assets/images/RU.png'
import flag_eng from '../../assets/images/engflag.jpg'
import flag_uz from '../../assets/images/flaguz.jpg'
const FLAGS = {
  ru: flag_ru,
  eng: flag_eng,
  uz: flag_uz
}
const Language = ({ lang, setLang }) => {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])
  return (
    <div className='language text-red-700 max-md:hidden '>
      <div className='w-28 h-8 flex px-2 items-center justify-between gap-2 border border-red rounded-md'>
        <img className='w-6 h-6 rounded-3xl' src={FLAGS[t('l')]} alt='img' />
        <select
          className='flex-1 h-full outline-none border-transparent bg-transparent text-red dark:border-black dark:text-black'
          value={lang}
          onChange={e => setLang(e.target.value)}
          name=''
          id=''
        >
          <option value='ru'>Ru</option>
          <option value='eng'>Eng</option>
          <option value='uz'>Uzb</option>
        </select>
      </div>
    </div>
  )
}

export default Language
