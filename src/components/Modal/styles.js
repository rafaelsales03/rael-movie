import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from {
    transform: scale(0);

}
to {
    transform: scale(1);
}
`

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: 1200px;
  padding: 20px 15px 20px 20px;
  border-radius: 30px;
  animation: ${scale} 0.5s linear;

  iframe {
    border: none;
    border-radius: 20px;
  }
`
export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    margin-bottom: 660px;
    cursor: pointer;
    color: aliceblue;
  }
`
