import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: build => ({
    getMovie: build.query({
      query: ({ type, params }) => ({
        url: `/movie/${type}`,
        params
      }),
      providesTags: ['Movie']
    }),
    getMovieDiscover: build.query({
      query: params => ({
        url: `/discover/movie`,
        params
      }),
      providesTags: ['Movie']
    }),
    getMovieDetail: build.query({
      query: id => ({
        url: `/movie/${id}`
      }),
      providesTags: ['Movie']
    })
  })
})

export const {
  useGetMovieQuery,
  useGetMovieDiscoverQuery,
  useGetMovieDetailQuery
} = movieApi
