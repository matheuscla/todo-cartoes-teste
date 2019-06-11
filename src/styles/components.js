import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 24px 30px 120px 30px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 74%;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
