import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
  background-color: #323334; 
  color: white;
  
}
`;
