import React, { useEffect, useRef, useState } from 'react'
import { useGetMovieSearchQuery } from '../../redux/api/movieApi'
import Reels from '../../components/reels/Reels'
import { useSearchParams } from 'react-router-dom'
import { FaRegWindowClose } from 'react-icons/fa'
const Search = () => {
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
      <div className='container px-20 h-auto max-lg:px-5'>
        <form
          onSubmit={handleSearch}
          action=''
          className='w-full h-14 flex items-center justify-between rounded-xl gap-10 max-sm:gap-2 max-[400px]:flex-col max-[400px]:h-auto'
        >
          <input
            value={searchValue}
            onChange={handleChange}
            type='search'
            className='flex-1 h-full rounded-xl text-lg text-navColor px-5 outline-none py-2 bg-slate-600 max-sm:h-12 max-[400]: w-full'
            placeholder='Search'
          />
          <button className='search w-52 h-full bg-slate-800 text-navColor border rounded-xl text-xl hover:bg-transparent hover:border border-slate-700 hover:text-slate-700 max-lg:w-auto max-lg:px-5 max-sm:h-12'>
            Search
          </button>
        </form>
      </div>
      <Reels data={data} />
      {!data && !data?.length && (
        <div className='container px-20 h-[300px] flex items-center justify-center flex-col gap-5 '>
          <FaRegWindowClose className='text-navColor text-[250px] dark:text-primary max-lg:text-[200px]' />
          <h2 className='text-navColor text-3xl dark:text-primary max-sm:text-lg'>
            Movie not found
          </h2>
        </div>
      )}
    </div>
  )
}

export default Search
