import React, { Component } from 'react';
import reviewsData from '../../data/reviews_books_100';
import analysisData from '../../data/reviews_books_analysis_100';

export const withState = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                reviews: []
            }
        }
        componentWillMount(){
            const reviews = analysisData
            this.setState({ reviews })
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