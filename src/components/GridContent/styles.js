import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        /* display: flex; */
        /* flex-direction: column; */
        text-align: center;
        /* min-height: 100vh; */
        max-width: 58rem;
        margin: 0 auto;
    `}
`;

export const Html = styled.div`
    ${({ theme }) => css`
        margin: ${theme.spacings.xhuge} 0;
    `}
`;
