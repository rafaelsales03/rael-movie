import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title, serie, people, season, idSerie }) {
  const navigate = useNavigate()

  const someFunction = (id) => {
    serie ? navigate(`/detailSeries/${id}`) : navigate(`/detalhe/${id}`)
    people ? navigate(`/`) : ''
    season ? navigate(`/detailSeries/${idSerie}`) : ''
    navigate(0)
  }

  return (
    <Container>
      <h3 style={{ color: 'white' }}>{title}</h3>

      <Swiper
        grabCursor
        spaceBetween={12}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info
          .filter(
            (similar) =>
              similar.backdrop_path !== null && similar.poster_path !== null
          )
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} onClick={() => someFunction(item.id)}></Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Slider
