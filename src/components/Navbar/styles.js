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
`
