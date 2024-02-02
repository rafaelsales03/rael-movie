import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 150px;
  width: 100%;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  width: 100%;
  justify-items: center;
  row-gap: 50px;

  @media (max-width: 1068px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 838px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 578px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    cursor: pointer;
    height: 100%;

    @media (max-width: 1330px) {
      margin-right: 50px;
    }

    @media (max-width: 557px) {
      margin-right: 0;
    }
  }
`
