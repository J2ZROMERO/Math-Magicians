/* eslint-disable */
import { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import calculate from '../basic_calc_logic/calculate.js'
function Basic() {

  const [data, setdata] = useState({
    total: null,
    next: 0,
    operation: '',
  });

  const handleClick = (e) => {
    const val = calculate(data, e.target.textContent);
    setdata(val);
  };

  const { next, operation, total } = data;
  let valfinal = '';

  valfinal = next;
   
  if (next === null && operation === null) {
    valfinal = total;
  }

  return (
    <Container className=" pt-5 calc_container">
      <Container className="container calc_container-sub d-flex justify-content-center flex-wrap">
      
        <Form.Control className="form_display text-end fs-1 " type="text" Value={valfinal} />

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-danger btn-block"
              onClick={handleClick}
            >
              AC
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              Mod
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              %
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              X
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              7
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              8
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              9
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              /
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              4
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              5
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}             
            >
              6
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              +
            </button>
          </Col>
        </Row>
        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              1
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              2
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              3
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-primary btn-block"
              onClick={handleClick}
            >
              -
            </button>
          </Col>
        </Row>

        <Row className="w-100 text-center gx-2 pt-2">
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              Pow
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              0
            </button>
          </Col>
          <Col class="col col-3">
            <button
              className="btn btn-secondary btn-block"
              onClick={handleClick}
            >
              .
            </button>
          </Col>
          <Col class="col col-3">
            <button className="btn btn-success btn-block" onClick={handleClick}>
              =
            </button>
          </Col>
          
          

        </Row>
      
      </Container>
    </Container>
  );
}

export default Basic;
