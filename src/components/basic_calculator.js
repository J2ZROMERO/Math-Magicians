/* eslint-disable */
import { Row, Col, Container, Form } from "react-bootstrap";

function Basic() {
  return (
    <Container className=" pt-5 calc_container">
      <Container className="container calc_container-sub d-flex justify-content-center flex-wrap">
        <Form.Control className="text-end fs-1 " type="text" value="0" />

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-danger btn-block"
              onClick="appendToDisplay('7')"
            >
              On
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('7')"
            >
              mod
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('7')"
            >
              %
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick="setOperator('+')"
            >
              X
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('7')"
            >
              7
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('8')"
            >
              8
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              9
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick="setOperator('+')"
            >
              /
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('7')"
            >
              4
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('8')"
            >
              5
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              6
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick="setOperator('+')"
            >
              +
            </button>
          </Col>
        </Row>
        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('7')"
            >
              1
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('8')"
            >
              2
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              3
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick="setOperator('+')"
            >
              -
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              X2
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              0
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick="appendToDisplay('9')"
            >
              .
            </button>
          </Col>
          <Col class="col col-3">
            <button className="btn btn-success btn-block" onClick="calculate()">
              =
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Basic;
