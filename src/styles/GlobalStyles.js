import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  
  :root {
    --bg-color: #edf2f8;
    --font-color: #595f6f;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    
    font-family: 'Manrope', sans-serif;
    font-size: 62.5%;

    display: grid;
    place-items: center;
    background-color: var(--bg-color);
    
  }


`;