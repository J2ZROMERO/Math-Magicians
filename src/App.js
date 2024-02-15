/* eslint-disable */
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Container, Form } from 'react-bootstrap';

function App() {
  
  return (
    
    <Container className='h-75 pt-5 '>
    <Container className='w-50 h-75 d-flex justify-content-center flex-wrap'>
    <Form.Control className='' type="text" value="4" />

      <Row className='w-100  text-center pt-2' >
      <Col class="col col-3"><button class="btn btn-danger btn-block" onclick="calculate()">ON</button></Col>
        <Col class="col col-3 offset-md-6"><button class="btn btn-primary btn-block" onclick="calculate()">-</button></Col>
      </Row>
    
    <Row className='w-100 text-center gx-2 pt-2' >
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">*</button></Col>
      </Row>

      <Row className='w-100 text-center gx-2 pt-2'>
        <Col class="col "><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">/</button></Col>
      </Row>
      <Row className='w-100 text-center gx-2 pt-2'>
        <Col class="col "><button class="btn btn-secondary btn-block" onclick="appendToDisplay('7')">7</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('8')">8</button></Col>
        <Col class="col"><button class="btn btn-secondary btn-block" onclick="appendToDisplay('9')">9</button></Col>
        <Col class="col"><button class="btn btn-primary btn-block" onclick="setOperator('+')">+</button></Col>
      </Row>
      <Row className='w-100 pt-2'>
        <Col class="col col-6"><button class="btn btn-success btn-block" onclick="calculate()">=</button></Col>
        
      </Row>

    </Container>
  </Container>
  );
}

export default App;
