import React, { useState } from 'react'
import { useGetMovieDiscoverQuery } from '../../redux/api/movieApi'
import { useGetGenreQuery } from '../../redux/api/genreApi'
import { FaRegWindowClose } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Tickets = () => {
  document.title = 'Genre'
  const navigate = useNavigate()
  const [selectedGenre, setSelectedGenre] = useState([])
  const { data: genres } = useGetGenreQuery()
  const { data, isError } = useGetMovieDiscoverQuery({
    with_genres: selectedGenre.join(','),
    without_genres: '10749,18'
  })

  const handleChangeGenre = id => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre(p => p.filter(i => i !== id))
    } else {
      setSelectedGenre(p => [...p, id])
    }
  }
  return (
    <div className='py-10 flex flex-col gap-5 bg-primary dark:bg-slate-200'>
      <div className='genres max-w-[1330px] mx-auto overflow-auto flex gap-5 pb-5 rounded-xl max-[1500px]:max-w-[1150px] max-xl:max-w-[900px] max-lg:max-w-[700px] max-md:max-w-[500px] max-sm:max-w-[400px] max-sm:px-0 max-sm:px-2 max-[450px]:max-w-[250px]'>
        {genres?.genres?.map(genre => (
          <button
            onClick={() => handleChangeGenre(genre.id)}
            key={genre.id}
            className={`text-white text-xl px-10 py-2 bg-gray-900 whitespace-nowrap rounded-[30px] max-lg:px-5 max-lg:text-sm ${
              selectedGenre.includes(genre.id) ? 'bg-red' : ''
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className='container h-auto px-20 grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-lg:gap-y-10 max-md:grid-cols-2 max-md:px-5 max-sm:grid-cols-1'>
        {data?.results?.map((movie, index) => (
          <div
            key={index}
            className='w-full h-[500px] overflow-hidden rounded-lg max-lg:h-96'
          >
            <img
              onClick={() => navigate(`/movie/${movie.id}`)}
              className='w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 duration-500'
              src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
        ))}
      </div>

      {!data?.total_results && (
        <div className='container px-20 h-[300px] flex items-center justify-center flex-col gap-5'>
          <FaRegWindowClose className='text-navColor text-[250px] dark:text-primary' />
          <h2 className='text-navColor text-3xl dark:text-primary max-sm:text-lg'>
            Movie not found
          </h2>
        </div>
      )}
    </div>
  )
}

export default Tickets
