import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')
  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getPopularPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieVideosHome(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}
export async function getAllMovies() {
  const {
    data: { results }
  } = await api.get(`/movie/popular`)

  return results
}

export async function getSeriesById(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}`)

  return data
}

export const getSeriesCredit = async (creditId) => {
  const {
    data: { cast }
  } = await api.get(`/tv/${creditId}/credits`)

  return cast
}

export const getSeriesVideos = async (videosId) => {
  const {
    data: { results }
  } = await api.get(`/tv/${videosId}/videos`)

  return results
}

export const getSeriesSimilar = async (similarId) => {
  const {
    data: { results }
  } = await api.get(`/tv/${similarId}/similar`)

  return results
}
