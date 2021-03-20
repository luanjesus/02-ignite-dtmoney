import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    //centraliza o conteúdo
    margin: 0 auto; 

    //o rem é equivalente ao font-size, neste caso 1rem é igual a 16px e 10rem igual a 160px para desktop 
    padding: 2rem 1rem 12rem; //top left buttom

    display: flex;
    align-items:center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem; //equivalente a 4px para 16px
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;