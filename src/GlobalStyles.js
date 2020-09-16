import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  
  :root {
    --bg-color: #edf2f8;
    --font-color: #afb6bd;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    height : 100vh;
    
    font-family: 'Manrope', sans-serif;
    font-size: 62.5%;
  }


`;