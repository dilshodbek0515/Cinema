import { changeLanguage } from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import flag_ru from '../../assets/images/RU.png'
import flag_eng from '../../assets/images/engflag.jpg'
const FLAGS = {
  ru: flag_ru,
  eng: flag_eng
}
const Language = ({ lang, setLang }) => {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])
  return (
    <div className='language text-red-700 max-md:hidden '>
      <div className='w-32 h-8 flex items-center justify-between gap-2'>
        <img className='w-6 h-6 rounded-3xl' src={FLAGS[t('l')]} alt='img' />
        <select
          className='flex-1 h-full outline-none border border-red rounded-md bg-transparent text-red dark:border-black dark:text-black'
          value={lang}
          onChange={e => setLang(e.target.value)}
          name=''
          id=''
        >
          <option value='ru'>Ru</option>
          <option value='eng'>Eng</option>
        </select>
      </div>
    </div>
  )
}

export default Language
