import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title, infoSeries, people }) {
  const navigate = useNavigate()

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
              {infoSeries === true ? (
                <Card
                  item={item}
                  onClick={() => navigate(`/detailSeries/${item.id}`)}
                />
              ) : infoSeries === false ? (
                <Card
                  item={item}
                  onClick={() => navigate(`/detalhe/${item.id}`)}
                />
              ) : people === true ? (
                <Card item={item} onClick={() => navigate('/')} />
              ) : (
                ''
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Slider
