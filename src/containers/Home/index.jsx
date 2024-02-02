import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularPeople,
  getPopularSeries,
  getTopMovies,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Info, Poster, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [popularPeople, setPopularPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPeople()
      ])
        .then(([movie, topMovie, topSeries, popularSeries, popularPeople]) => {
          setMovie(movie)
          setTopMovies(topMovie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setPopularPeople(popularPeople)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailler
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && (
        <Slider serie={true} info={topSeries} title={'Top Séries'} />
      )}
      {popularSeries && (
        <Slider serie={true} info={popularSeries} title={'Séries Populares'} />
      )}
      {popularPeople && (
        <Slider people={true} info={popularPeople} title={'Top Artistas'} />
      )}
    </>
  )
}

export default Home
