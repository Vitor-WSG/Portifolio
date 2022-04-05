import styled from 'styled-components'

export const Container = styled.header` //estilização do header-container
background: var(--blue);

`
export const Content = styled.div` //estilização do header-content
    max-width: 1128px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem; /* 1 rem = 16px da fonte */
    display:flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color:#fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.5rem;
        height: 3rem;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    
`