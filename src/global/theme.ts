import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  img {
    image-rendering: auto;
  }

  body {
    width:100%;
    height:100%;
    scrollbar-width: thin;
  }

  html {
    @media (min-width: 1600px){
      font-size: 18px;
    }
    @media (min-width:600px){
      font-size:16px;
    }
    @media (max-height:720px){
      font-size:14px;
    }
    @media (max-width:480px){
      font-size:14px;
    }
  }

  li, ul {
    list-style: none;
  }

  button {
    cursor:pointer;
  }


  scroll-behavior: smooth;
  overflow-x: hidden;

  :root {


    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    // COLORS

    --white-color: #ffffff;
    --primary-color: #5C5D73;
    --secondary-color: #ADB0D9;
    --delete-color: #C70000;
    --saved-color: #6CA468;
    --edit-color: #009FFFE8;
  }
`;
