import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ item, onClick }) {
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || '')}
        onClick={onClick}
        alt="imagem-carrosel"
      />
      <h3>{item.title || item.name}</h3>
    </Container>
  )
}

export default Card
