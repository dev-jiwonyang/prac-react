import React from 'react'
import styled, { css } from 'styled-components'

const sizes = {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]/16}em) {
            ${css(...args)}
        }
    `
    return acc;
}, {})

const Box = styled.div`
    background-color: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    ${props =>
        props.inverted &&
        css`
            background: none;
        `
    }

    ${media.desktop`width: 768px;`}
    ${media.table`width: 100%;`}
`

function StyledComponent() {
  return (
    <Box color="red" inverted={false}>
        안녕하세요
    </Box>
  )
}

export default StyledComponent