import { createGlobalStyle } from 'styled-components';
import pixelToRem from '../utils/pixToRem';

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body { 
  -webkit-font-smoothing: antialiased;
  font-family: 'Heebo', sans-serif;
  background-color: var(--space-dark) ;
}

:root {
  --space: #0B1E8A;
  --space-light: #3D68B2;
  --space-dark: #040327;

  --mars: #E85937;
  --mars-light: #FF8C70;
  --mars-dark: #CF3F1D;
  
  --gray-01: #0D0E13;
  --gray-02: #2C2D3A;
  --gray-03: #60616F;
  --gray-04: #898A93;
  --gray-05: #D5D5DB;
  
  --uranus: #24ffe9;
  --sun: #F5D15F;
  --jupiter: #E00E34;
  --earth: #0FDD86;
  --saturn: #554AD7;

  --text: #FFFFFF;

  /* Fonts */
  --font-display: 800 ${pixelToRem(62)}/${pixelToRem(82)} 'Heebo', sans-serif;
  --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} 'Heebo', sans-serif;
  --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} 'Heebo', sans-serif;
  --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} 'Heebo', sans-serif;
  --font-text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} 'Heebo', sans-serif;
  --font-text-3: 500 ${pixelToRem(18)}/${pixelToRem(27)} 'Heebo', sans-serif;
  --font-text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} 'Heebo', sans-serif;
  --font-text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} 'Heebo', sans-serif;
  --font-text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} 'Heebo', sans-serif;
}`;
