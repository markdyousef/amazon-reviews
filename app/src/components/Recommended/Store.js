import React, { Component } from 'react';
import recommendationsData from '../../data/meta_books_small';

export const withState = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                recommendations: []
            }
        }
        componentWillMount(){
            const { data } = recommendationsData;
            const recommendations = data.map(rec => JSON.parse(rec));
            this.setState({ recommendations })
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