import { createGlobalStyle } from "styled-components";

// Here I can create global styles for the whole app

const GlobalStyle = createGlobalStyle`

*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  display: inline-block;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Source-Sans-Pro;, sans-serif;
}

`

export default GlobalStyle;