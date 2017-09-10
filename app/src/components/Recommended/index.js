import React from 'react'
import styled from 'styled-components'
import Model from './Model';

const Container = styled.section`
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #ddd;
    justify-content: center;
`;

export default () => {
    return (
        <Container>
            <Model />
        </Container>
        )
}