import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 320px;
  margin-bottom: 48px;
  box-shadow: 2px 2px 6px rgba(40, 40, 40, 0.2);

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Info = styled.div`
  padding: 8px 16px 16px 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;

    img {
      height: 19px;
      width: 16px;
      cursor: pointer;
    }
  }

  strong {
    color: #A1A1A1;
    font-size: 16px;
    line-height: 24px;
  }
`
