import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TodoCartoes';
    src: url('../assets/fonts/TodoCartoesFont.ttf');
  }

  @font-face {
    font-family: 'TodoCartoes';
    src: url('../assets/fonts/TodoCartoesFontBold.ttf');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,body, #root {
    height: 100%;
    color: #282828;
    background: #FAFAFA;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'TodoCartoes', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  .rc-slider-handle {
    border-color: #54A8FD !important;
    margin-top: -10px !important;
    width: 24px !important;
    height: 24px !important;
  }

  .rc-slider-track {
    background-color: #54A8FD !important;
  }
`

export default GlobalStyle
