import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getSeriesById,
  getSeriesCredit,
  getSeriesVideos,
  getSeriesSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Backgorund,
  Container,
  CoverImage,
  Info,
  ContainerSeriesVideos
} from './styles'

const DetailSeries = () => {
  const { idSeries } = useParams()
  const [series, setSeries] = useState()
  const [seriesCredit, setSeriesCredit] = useState()
  const [seriesVideos, setSeriesVideos] = useState()
  const [seriesSimilar, setSerieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSeriesById(idSeries),
        getSeriesCredit(idSeries),
        getSeriesVideos(idSeries),
        getSeriesSimilar(idSeries)
      ])
        .then(([serie, credit, videos, similar]) => {
          setSeries(serie)
          setSeriesCredit(credit)
          setSeriesVideos(videos)
          setSerieSimilar(similar)
        })
        .catch((error) => console.log(error))
    }

    getAllData()
  }, [idSeries])

  return (
    <>
      {series && (
        <>
          <Backgorund image={getImages(series.backdrop_path)} />
          <Container>
            <CoverImage>
              <img
                src={getImages(series.poster_path)}
                alt="title-image-poster-serie"
              />
            </CoverImage>
            <Info>
              <h2>{series.original_name}</h2>
              <SpanGenres genres={series.genres} />
              <p>{series.overview}</p>
              <div>
                <Credits credits={seriesCredit} />
              </div>
            </Info>
          </Container>

          <ContainerSeriesVideos>
            {seriesVideos &&
              seriesVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  />
                </div>
              ))}
          </ContainerSeriesVideos>

          {series && (
            <Slider
              infoSeries={true}
              season={true}
              idSerie={idSeries}
              serie={true}
              info={series.seasons}
              title={'Temporadas'}
            />
          )}

          {seriesSimilar && (
            <Slider
              infoSeries={true}
              serie={true}
              info={seriesSimilar}
              title={'Series Similares'}
            />
          )}
        </>
      )}
      <h1>teste</h1>
    </>
  )
}

export default DetailSeries
