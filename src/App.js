import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import './App.css';

import DynamicLabelInput from './Components/DynamicLabelInput/index'

function App() {

    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <h1 className="mb-5">DynamicLabelInput</h1>
              <DynamicLabelInput />
            </Col>
            <Col xs="12" md="6"></Col>
          </Row>
        </Container>
      </div>
    )
}

export default App;
