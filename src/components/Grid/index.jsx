import { useNavigate } from 'react-router-dom'

import Card from '../Card'
import { Container, Body } from './styles'

const Grid = ({ info, infoSeries }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Body>
        {info.map((item, index) => (
          <div key={index}>
            {infoSeries ? (
              <Card
                item={item}
                onClick={() => navigate(`/detailSeries/${item.id}`)}
              />
            ) : (
              <Card
                key={index}
                item={item}
                onClick={() => navigate(`/detalhe/${item.id}`)}
              />
            )}
          </div>
        ))}
      </Body>
    </Container>
  )
}

export default Grid
