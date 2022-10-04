import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
	    vertical-align: baseline;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }
    

    :root{
    /* Primary Palette */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    /* Grey Scale Palette */
    --white: #FFFFFF;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --black: #000000;

    /* Feedback Palette */
    --Sucess: #3FE864;
    --negative: #E83F5B;

    /* Typography */
    --title1: 1.2rem;
    --title2: 0.87rem;
    --headline: 0.75rem;

    }
`;
