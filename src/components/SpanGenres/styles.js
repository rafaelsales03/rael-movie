import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  span {
    padding: 8px 8px;
    border: 2px solid #ffffff;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 391px) {
    span {
      text-align: center;
    }
  }
`
