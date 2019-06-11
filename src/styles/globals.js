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
`

export default GlobalStyle
