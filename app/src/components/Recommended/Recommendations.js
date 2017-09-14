import React from 'react';
import {Card, CardHeader, CardText, CardMedia} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import StartBorder from 'material-ui/svg-icons/toggle/star-border';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
`;

const styles = {
  card: {
    width: 200,
    margin: 2,
    display: 'inline-block',
  }
}

const CardTitle = styled.h5`
  padding: 10px;
  color: #fff;
  text-align: center;
`;

const renderRecommendations = (recommendations) => {
  const cards = recommendations.map(rec => {
    const {asin, title, imUrl, description} = rec;
    return (
      <Card key={asin} style={styles.card}>
        <CardHeader>{asin}</CardHeader>
        <CardMedia overlay={<CardTitle>{title}</CardTitle>}>
          <img src={imUrl} />
        </CardMedia>
      </Card>
    );
  });
  return cards;
}

export default ({ recommendations }) => {
  return (
    <Container>
      {renderRecommendations(recommendations)}
    </Container>
  );
};