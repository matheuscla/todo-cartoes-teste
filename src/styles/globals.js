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
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #434655;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #434655;
    -webkit-box-shadow: inset 0 0 6px #434655;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
  	background: rgba(255,0,0,0.4);
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
