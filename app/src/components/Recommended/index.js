import React from 'react';
import styled from 'styled-components';
import Toolbar from '../Toolbar';
import { withState } from './Store';
import Recommendations from './Recommendations';

const Container = styled.section`
    width: 100%;
    height: 100%;
`;

export default withState(({...props}) => {
    return (
        <Container>
            <Recommendations recommendations={props.recommendations}/>
        </Container>
        )
});