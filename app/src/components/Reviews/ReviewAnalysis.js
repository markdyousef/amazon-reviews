import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import nlpData from '../../data/reviews_books_analysis_100';
import styled from 'styled-components';

const Analysis = styled.section`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const TokenContainer = styled.div`
    margin: 2px;
`;

const Word = styled.span``;

const EntityContainer = styled.span`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 200, 0.5);
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ddd;
    span {
        font-size: 8px;
        margin-left: 2px;
    }
`;

const renderEntity = (text, entity) => 
    <EntityContainer>
        {text}
        <span>
            {entity}
        </span>
    </EntityContainer>


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: 'none'
        };
    }
    renderAnalysis = () => {
        const { review: {analysis, reviewText} } = this.props;
        const {show} = this.state;
        return (
            <Analysis>
                {analysis.map((token, index) => {
                    const {text, entity} = token;
                    token = <Word>{text}</Word>;
                    switch(show) {
                        case 'entity':
                            if (entity) token=renderEntity(text, entity);
                            break;
                        case 'dep':
                            token = <Word>{text}</Word>;
                            break;
                        default:
                            token = <Word>{text}</Word>;
                            break;
                    }
                    return (
                        <TokenContainer key={text+index}>
                            {token}
                        </TokenContainer>
                    )
                })}
            </Analysis>
        )
        
    }
    handleChange = (event, value) => {
        this.setState({show: value})
    }
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    render() {
        const actions = [<FlatButton label="Cacel" onClick={this.handleClose}/>];
        const { review: {summary} } = this.props;
        return (
            <div>
                <RaisedButton label="Analysis" onClick={this.handleOpen}/>
                <Dialog
                    title={summary}
                    modal={false}
                    actions={actions}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                <RadioButtonGroup
                    defaultSelected="none"
                    name="analysis"
                    style={{display: 'flex', width: 100}}
                    onChange={this.handleChange}
                >
                    <RadioButton value="none" label="None" />
                    <RadioButton value="entity" label="Entities"/>
                    <RadioButton value="dep" label="Dependencies"/>
                </RadioButtonGroup>
                    {this.renderAnalysis()}
                </Dialog>
            </div>
        );
    }
}