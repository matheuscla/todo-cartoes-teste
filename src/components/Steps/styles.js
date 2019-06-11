import styled from 'styled-components'

import checked from '../../assets/images/checked.svg'

export const Container = styled.div`
  height: 100px;
  background: #EEF1F7;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 15px 30px;
    align-items: flex-start;
  }
`

export const Step = styled.div`
  div {
    display: flex;
    align-items: center;

    & > div {
      background: ${props => props.current ? `url(${checked}) no-repeat center` : 'transparent' };
    }

    strong {
      font-size: 16px;
      line-height: 24px;
    }
  }

  small {
    font-size: 12px;
    line-height: 20px;
    margin-left: 24px;
    display: block;
    color: #151F32;
  }

  div strong, small {
    color: ${props => props.disabled? '#A1A1A1' : ''}
  }

  @media(max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const Status = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #35C783;
  border-radius: 50%;
  margin-right: 8px;
`
