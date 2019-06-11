import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  background: #fff;

  span {
    font-size: 20px;
    line-height: 24px;
    color: #A1A1A1;
    cursor: pointer;

    img {
      margin-right: 12px;
    }
  }

  @media(max-width: 768px) {
    height: 50px;

    img {
      height: 100px;
      width: 100px;
    }

    span {
      font-size: 12px;
      line-height: 16px;

      img {
        width: auto;
        height: 10px;
      }
    }
  }
`

export const LoginButton = styled.button`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 8px 30px;
  background: #54A8FD;
  border-radius: 4px;
  width: 144px;
  height: 40px;
  font-weight: bold;

  @media(max-width: 768px) {
    width: auto;
    height: auto;
    font-size: 12px;
    padding: 0;
    background: transparent;
    color: #54A8FD;
  }
`
