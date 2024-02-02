import { useEffect, useState } from 'react'

import Grid from '../../components/Grid'
import { getAllMovies } from '../../services/getData'

const Movies = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getAllMovies()]).then(([movies]) => {
        setMovies(movies)
      })
    }
    getAllData()
  }, [])

  return <>{movies && <Grid infoSeries={false} info={movies} />}</>
}

export default Movies
