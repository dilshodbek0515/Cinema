import React from 'react'
import { MOVIE_LISTS } from '../../static'
const Category = ({ setType, setPage, setParams, activeType }) => {
  const handleChangeType = path => {
    setType(path)
    setPage(1)
    setParams({ path, count: 1 })
  }

  return (
    <div className='w-full h-20 py-5 flex gap-10 whitespace-nowrap container max-lg:gap-5 max-sm:px-2 max-sm:gap-2'>
      {MOVIE_LISTS?.map(item => (
        <button
          key={item.id}
          onClick={() => handleChangeType(item.path)}
          className={`
              text-xl px-5 pt-2 pb-4 whitespace-nowrap bg-card_bg rounded-lg
               dark:bg-slate-50 dark:text-primary
               max-xl:text-lg max-md:text-sm max-sm:text-[10px] max-sm:w-28 max-sm:px-1 max-sm:py-2 max-sm:h-8 max-sm:rounded-md 
                 ${activeType === item.path ? 'text-red' : 'text-navColor'}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default Category
