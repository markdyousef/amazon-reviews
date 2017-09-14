import React from 'react';
import styled from 'styled-components';
import Model from '../Model';
import Toolbar from '../Toolbar';
import { withState } from './Store';
import Recommendations from './Recommendations';

const Container = styled.section`
    width: 100%;
    height: 100%;
`;

const ToolbarContainer = styled.nav`
    margin: 0 0 10px;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
`;

const Main = styled.section`
    padding-top: 60px;
    display: flex;
`;

const ModelContainer = styled.div`
    padding: 10px;
    width: 400px;
    height: 100%;
    background: #fff;
`;

export default withState(({...props}) => {
    return (
        <Container>
            <ToolbarContainer>
                <Toolbar
                    onModelChange={props.onModelChange}
                    models={props.models}
                    model={props.model}
                />
            </ToolbarContainer>
            <Main>
                {/* <ModelContainer>
                    <Model model={props.model}/>
                </ModelContainer> */}
                <Recommendations recommendations={props.recommendations}/>
            </Main>
        </Container>
        )
});