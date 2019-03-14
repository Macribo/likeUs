import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Title = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 center">likeUs</h1>
          {/* <p className="lead">likeUs</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Title;
