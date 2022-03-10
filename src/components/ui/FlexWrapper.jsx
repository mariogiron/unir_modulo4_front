import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const FlexWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default FlexWrapper;