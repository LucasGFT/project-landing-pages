import styled, { css } from 'styled-components';

export const Container = styled.a`
    ${({ theme }) => css`
        position: fixed;
        display: flex;
        background-color: ${theme.colors.primaryColor};
        color: ${theme.colors.white};
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
        /* opacity: 0.7; */
        border: 0.1rem solid ${theme.colors.primaryColor};
        border-radius: 50%;
        text-decoration: none;
    `}
`;
