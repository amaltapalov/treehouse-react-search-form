import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

const Results = () => (
    <Container>
        <h2>Results list</h2>
        <ListGroup>
          <ListGroupItem href="#" active>Link 1</ListGroupItem>
          <ListGroupItem href="#">Link 2</ListGroupItem>
          <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
        </ListGroup>
    </Container>
);

export default Results;
