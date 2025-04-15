import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.5;
  }
`;
