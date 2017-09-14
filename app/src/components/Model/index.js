import React, { Component } from 'react';
import styled from 'styled-components';
// import { nnModel } from '../../keras';
import dot from './../../models/dot';
import dotMeta from '../../models/dot_metadata';
import nn from './../../models/nn';
import nnMeta from './../../models/nn_metadata';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const Container = styled.div`
    width: 400px;
`;

const ModelContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Layer = styled.div`
    background-color: #fff;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px;
    padding-top: 15px;
    position: relative;
`;

const Inbound = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 20px;
    // border-bottom: 1px solid #ddd;
    top: 0;
    left: 0;
    font-size: 10px;
    span {
        padding: 3px 10px;
        border-radius: 2px;
        font-weight: bold;
        background-color: #ded;
        margin: 1px;
    }
`;

const ChipInner = styled.div`
    span {
        font-size: 12px;
        font-weight: bold;
        margin-left: 5px;
    }
`;

const Info = styled.div`
    margin-left: 10px;
    // width: 100px;
    display: flex;
`;

const Field = styled.div`
    font-size: 10px;
    span {
        font-size: 12px;
        display: block;
        font-weight: bold;
    }
`;

const Meta = styled.div`
    margin-left: 10px;
`;

const renderLayer = (layer, meta) => {
    const chipStyle = {
        backgroundColor: '#ddd'
    };
    const { config: { dtype, mode }, inbound_nodes } = layer;
    return (
        <Paper key={layer.name} style={{margin: '2px'}}>
            <Layer>
                <Inbound>
                    {inbound_nodes[0]&&inbound_nodes[0].map(
                        node => <span key={node[0]}>{node[0]}</span>)}
                </Inbound>
                <Chip style={chipStyle}>
                    <ChipInner>
                        {layer.class_name}
                        <span>({layer.name})</span>
                    </ChipInner>
                </Chip>
                <Info>
                    {dtype&&<Field>Data Type <span>{dtype}</span></Field>}
                    {mode&&<Field>Mode Type <span>{mode}</span></Field>}
                    {meta&&meta.map(data => (
                        <Meta key={data.layer_name+data.length}>
                            {data.length&&<Field>Length <span>{data.length}</span></Field>}
                            {data.shape&&<Field>Shape <span>({data.shape.toString()})</span></Field>}
                        </Meta>
                    ))}
                </Info>
            </Layer>
        </Paper>
    );
}

export default class Model extends Component {
    renderModel = (model) => {
        model = (model==='dot') ? dot : nn;
        const meta = (model==='dot') ? dotMeta : nnMeta;

        const { config: { layers }, class_name } = model;

        return (
            <ModelContainer>
                {layers.map(layer => renderLayer(
                    layer, meta.filter(obj => obj.layer_name == layer.name)))}
            </ModelContainer>
        )
        
    }
    render() {
        return (
            <Container>
                {this.renderModel(this.props.model)}
            </Container>
        );
    }
}