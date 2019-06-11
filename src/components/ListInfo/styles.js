import styled from 'styled-components'

import defaultAvatar from '../../assets/images/default-avatar.png'


export const Container = styled.div`
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 44px;
`

export const Info = styled.div`
  text-align: center;
  padding: 0 0 40px 0;

  h1 {
    font-size: 32px;
    line-height: 40px;
    color: #54A8FD;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    color: #A1A1A1;
    display: block;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #C1C1C1;
  }

  button {
    color: #FFFFFF;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    width: 240px;
    height: 40px;
    padding: 8px 25px;
    border-radius: 4px;
    background: #54A8FD;
    margin-top: 16px;
  }

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -100px;
    border: 5px solid #fff;
  }
`

export const ImageBackground = styled.div`
  height: 250px;
  width: 100%;
  background: url(${defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`
