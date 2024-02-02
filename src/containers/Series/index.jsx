import { useState, useEffect } from 'react'

import Grid from '../../components/Grid'
import { getPopularSeries } from '../../services/getData'

const Series = () => {
  const [series, setSeries] = useState()

  useEffect(() => {
    const getAllSeries = async () => {
      Promise.all([getPopularSeries()])
        .then(([series]) => {
          setSeries(series)
        })
        .catch((error) => console.log(error))
    }

    getAllSeries()
  }, [])

  return <>{series && <Grid infoSeries={true} info={series} />}</>
}

export default Series
