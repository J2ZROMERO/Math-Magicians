/* eslint-disable */
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import { Row, Col, Container, Form } from "react-bootstrap";

function App() {
  return (
    <Container className=" pt-5 calc_container">
      <Container className="container calc_container-sub d-flex justify-content-center flex-wrap">
        <Form.Control className="" type="text" value="4" />

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              class="btn btn-danger btn-block"
              onclick="appendToDisplay('7')"
            >
              On
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('7')"
            >
              mod
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('7')"
            >
              %
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-primary btn-block"
              onclick="setOperator('+')"
            >
              X
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('7')"
            >
              7
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('8')"
            >
              8
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              9
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-primary btn-block"
              onclick="setOperator('+')"
            >
              /
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('7')"
            >
              4
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('8')"
            >
              5
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              6
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-primary btn-block"
              onclick="setOperator('+')"
            >
              +
            </button>
          </Col>
        </Row>
        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('7')"
            >
              1
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('8')"
            >
              2
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              3
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-primary btn-block"
              onclick="setOperator('+')"
            >
              -
            </button>
          </Col>
        </Row>

        
        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              X2
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              0
            </button>
          </Col>
          <Col class="col col-3">
            <button
              class="btn btn-secondary btn-block"
              onclick="appendToDisplay('9')"
            >
              .
            </button>
          </Col>
          <Col class="col col-3">
            <button class="btn btn-success btn-block" onclick="calculate()">
              =
            </button>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default App;
