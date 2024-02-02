import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 3px solid #ffff;
  background: transparent;
  color: #ffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background: #ffff;
    transition: 0.5s;
  }
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`
export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 13px rgb(255 0 0 / 30%);
    transition: 0.5s;
    background: #ff0000;
    color: #ffff;
  }
`
