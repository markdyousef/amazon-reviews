import React from 'react';
import styled from 'styled-components';
import {withState} from './Store';
import {Card} from 'material-ui/Card'
import StartBorder from 'material-ui/svg-icons/toggle/star-border';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 1600px;
`;

const Review = styled.div`
    padding: 8px;
    width: 350px;
`;

const ProductInfo = styled.div`
    h3 {
        font-size: 12px;
    }
`;

const Text = styled.div`
    width: 100%;
    font-size: 12px;
`;

const Ratings = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 12px;
        margin: 5px;
    }
`;

const Stars = styled.div`
    display: flex;
`;

const User = styled.div`
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
`;

const renderReviews = (reviews) => {
    return reviews.map((review, index) => {
        const {
            asin,
            helpful,
            overall,
            reviewText,
            reviewerName, 
            summary,
            unixReviewTime
        } = review;
        const id = unixReviewTime+index
        return (
            <Card key={id} style={{margin: '5px'}}>
                <Review>
                    <ProductInfo>
                        <h3> ProductID: {asin}</h3>
                    </ProductInfo>
                    <Ratings>
                        <span>Helpful</span>
                        {helpful[0]}/{helpful[1]}
                        <span>Overall</span>
                        <Stars>
                            {Array.apply(null, {length: overall}).map((k, i) => (
                                <StartBorder key={id+i}>d</StartBorder>
                            ))}
                        </Stars>
                    </Ratings>
                    <Text>
                        <h3>{summary}</h3>
                        {reviewText}
                    </Text>
                    <User>- {reviewerName}</User>
                </Review>
            </Card>);
    });
}

export default withState(({...props}) => {
    return (
        <Container>
            {renderReviews(props.reviews)}
        </Container>
    );
});