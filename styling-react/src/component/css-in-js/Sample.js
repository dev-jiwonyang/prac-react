import styled from "styled-components"

const Sample = ({ className }) => {
    return <div className={className}>Sample</div>
}

const StyledSample = styled(Sample)`
    font-size: 2rem;
`