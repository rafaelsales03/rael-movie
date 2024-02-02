import { useEffect, useState } from 'react'
import { SlClose } from 'react-icons/sl'

import { getMovieVideosHome } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [infoMovie, setInfoMovie] = useState()

  useEffect(() => {
    async function getInfoMovies() {
      setInfoMovie(await getMovieVideosHome(movieId))
    }
    getInfoMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {infoMovie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${infoMovie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
          <span>
            <SlClose onClick={() => setShowModal(false)} size={30} />
          </span>
        </Container>
      )}
    </Background>
  )
}

export default Modal
