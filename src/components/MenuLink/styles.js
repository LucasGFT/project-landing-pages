import styled, { css } from 'styled-components';

export const Link = styled.a`
    ${({ theme }) => css`
        display: block;
        text-decoration: none;
        color: ${theme.colors.primaryColor};
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.small};
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0.75rem;
            left: 50%;
            width: 0;
            height: 0.2rem;
            background-color: ${theme.colors.secondaryColor};
            transition: all 300ms ease-in-out;
        }

        &:hover::after {
            left: 25%;
            width: 50%;
        }
    `}

    
`;
