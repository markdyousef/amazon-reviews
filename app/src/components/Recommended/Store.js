import React, { Component } from 'react';

export const withState = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                models: ['dot', 'nn'],
                model: 'nn'
            }
        }
        changeModel = (model) => this.setState({ model })
        render() {
            return (
                <WrappedComponent
                    onModelChange={this.changeModel}
                    {...this.state}
                />
            );
        };
    }
}