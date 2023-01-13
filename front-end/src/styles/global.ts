import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
  }
  body {
    background-color: #f1f1f1;
    margin: 0 auto;
  }
  .container { 
    max-width: 1250px;
  }
  a { 
    text-decoration: none;
    color: black;
  }
`
