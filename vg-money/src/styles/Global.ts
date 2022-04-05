//Arquivo par estilização global da pagina
import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle `
:root {
    --background:#f0f2f5;
    --red: #E52E4D;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
    --green: #33cc95;
}

* {
    margin:0;
    padding:0;
    box-sizing: bolder-box;
}
html { 
    @media (max-width: 1080px) {
        font-size: 93.75%; /*16px*/
    }
    @media (max-width: 720px){
        font-size: 87.5%; /*15px*/
    }
}

body {
    background: var(--background);
    -webkit-font-somoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif, Ubuntu;
    font-weight: 400;
}
h1,h2,h3,h4,h6,strong {
    font-Weight:600;
}

button {
    cursor: pointer;
}
[disabled] {
    opacity:0.6;
    cursor: not-allowed; /*sinal de inacessível */
}


`