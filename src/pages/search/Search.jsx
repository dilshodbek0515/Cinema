import React, { useEffect, useRef, useState } from 'react'
import { useGetMovieSearchQuery } from '../../redux/api/movieApi'
import Reels from '../../components/reels/Reels'
import { useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import notfound from '../../assets/images/found.png'
const Search = () => {
  document.title = 'Search'
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState('')
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const { data, error, isLoading } = useGetMovieSearchQuery(
    { query: search },
    { skip: !search }
  )
  useEffect(() => {
    let query = searchParams.get('q')
    if (query) {
      setSearchValue(query)
      setSearch(query)
    }
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    setSearch(searchValue)
    setSearchParams({ q: searchValue })
  }

  const handleChange = e => {
    e.preventDefault()
    setSearchValue(e.target.value)
    setSearchParams({ q: e.target.value })
  }

  return (
    <div className='w-full h-auto bg-primary py-10 dark:bg-slate-200'>
      <div className='container px-52 h-auto max-lg:px-5'>
        <form
          onSubmit={handleSearch}
          action=''
          className='w-full h-14 flex items-center px-2 justify-between border-2 border-red rounded-xl gap-1 max-[400px]:h-auto'
        >
          <input
            value={searchValue}
            onChange={handleChange}
            type='search'
            className='flex-1 h-full rounded-xl text-lg text-red outline-none py-2 px-2 bg-transparent'
            placeholder={t('search.search')}
          />
          <button className='search flex items-center justify-center h-full text-red border-transparent rounded-xl max-sm:h-12'>
            <FaSearch className='text-2xl' />
          </button>
        </form>
      </div>
      <Reels data={data} />
      {!data && !data?.length && (
        <div className='container px-20 flex items-center justify-center flex-col gap-5 '>
          <img className='w-96 max-lg:w-[200px]' src={notfound} alt='img' />
          <h2 className='text-navColor text-3xl dark:text-primary max-sm:text-lg'>
            Movie not found
          </h2>
        </div>
      )}
    </div>
  )
}

export default Search
