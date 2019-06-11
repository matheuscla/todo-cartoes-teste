import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  width: 322px;
  height: 210px;
  border: 1px solid #DBDBDB;

  h3 {
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
  }

  hr {
    border: 0;
    background: #DBDBDB;
    height: 1px;
    margin-top: 8px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 2px;
  height: 40px;
  padding: 8px 16px;
  color: #A1A1A1;
  font-size: 14px;
  line-height: 22px;
`

export const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const RangeContainer = styled.div`
  width: 258px;
  margin-left: 3px;
`
