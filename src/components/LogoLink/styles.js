import styled, { css } from 'styled-components';

export const Link = styled.a`
    ${({ theme }) => css`
        all: unset;
        color: ${theme.colors.primaryColor};
        font-weight: 700;
        cursor: pointer;

        > img {
            height: 3rem;
        }
    `}
`;
