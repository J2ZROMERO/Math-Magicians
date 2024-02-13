/* eslint-disable */
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Container, Form } from 'react-bootstrap';

function App() {
  
  return (
    <Container>
    <Container>
    <Form.Control type="text" value="4" />
    
      <Row>
        <Col class="col "><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">+</button></Col>
      </Row>
      <Row>
        <Col class="col "><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">+</button></Col>
      </Row>
      <Row>
        <Col class="col "><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">+</button></Col>
      </Row>
      <Row>
        <Col class="col"><button class="btn btn-success btn-block" onclick="calculate()">=</button></Col>
      </Row>
    </Container>
  </Container>
  );
}

export default App;
