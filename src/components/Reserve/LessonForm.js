import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function LessonForm(props) {


  console.log(props.lessonLength);
  return (
    <Container fluid>
      <Form onSubmit={(event) => {props.onFormSubmit(event); props.toggleAdd(); props.onLessonAdd(props.selectedLsn); }}>
        <Row className="form-rows mt-5 mb-4 my-md-5">
          <Col md={6} className="mb-4  ps-md-3 pe-md-0 ps-lg-4">
            <Form.Group className="" controlId="formLessonFName">
                <Form.Label>Name:</Form.Label>
                <Form.Control autofocus className="form-name" type="text" required value={props.riderName}
                onChange={event => props.onRiderAdd(event)} placeholder="First & Last Name"  />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-5 mt-1">
            <Form.Group className="" controlId="formLessonLName">
                <Form.Label className="">Email:</Form.Label>
                <Form.Control className="form-name" type="email" required placeholder="Enter Email"  />
            </Form.Group>
          </Col>
        </Row>
        <Row className="form-rows mb-3 mb-md-5">
          <Col md={6} className="mb-5">
            <Form.Group className="radio-group" key="lesson-length" controlId="formLessonRadio">
              <Form.Label>Lesson Length:</Form.Label>
              <div className="radios" id="formLessonRadio">
                <Form.Check type="radio" className="no-vald-style fs-5" id="full-day-radio"  checked={props.lessonLength === "Full Day"} name="lesson length"
                label="Full Day" value="Full Day" disabled={props.lessonLength === "Full Day"} onChange={event => props.setFullPrice(event)} />

                <Form.Check type="radio" className="no-vald-style fs-5" id="half-day-radio" checked={props.lessonLength === "Half Day"} name="lesson length"
                label="Half Day" value="Half Day" disabled={props.lessonLength === "Half Day"} onChange={event => props.setHalfPrice(event)} />
              </div>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-5 mt-1">
            <div>
              <Form.Label>Instructor: </Form.Label>
              <span className="indigo fs-3 fst-italic text-opacity-75"> {props.selectedLsn.instructorName}</span>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 mb-md-5">
          <Col md={{span: 5, offset: 1}} className="mb-5">
            <div className="">
              <Form.Label>Type: </Form.Label>
              <span className="indigo fs-3 fst-italic text-opacity-75"> {props.selectedLsn.lsnType}</span>
            </div>
          </Col>
          <Col md={{span: 4, offset: 0}} className="mb-5">
            <div className="form-r3 ">
              <Form.Label>Price: </Form.Label>
              <span className="indigo fs-4 fw-bold fst-italic text-opacity-75"> ${props.selectedLsn.lessonCost}</span>
            </div>
          </Col>
        </Row>
        <Row className="form-rows mb-3 mb-md-4">
          <Col md={{ span: 3, offset: 1}} className="mb-5">
            <div className="form-r3 ">
              <Form.Label>Date:</Form.Label>{` `}
                <mark className="py-2 px-1"><span className="fs-5 fw-bold text-danger">{((new Date(props.selectedLsn.lsnTime)).toDateString()).substring(3,10)}</span></mark>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 2}} className="mb-5">
            <div className="form-r3 ">
              <Form.Label >Time:</Form.Label>{` `}
                <mark className="py-2 px-1"><span className="fs-5 fw-bold text-danger">{((new Date(props.selectedLsn.lsnTime)).toTimeString()).substring(0,5) + "am"}</span></mark>
            </div>
          </Col>
        </Row>
        <Row className="form-rows mb-2 mb-md-4">
          <Col md={{ span: 10, offset: 2}} className="">
            <Form.Group className="mb-5 form-row" key="" controlId="formLessonLNotes">
              <Form.Label >Lesson Notes:</Form.Label>
              <Form.Control as="textarea" value={props.lessonNotes} onChange={event => props.onNotesChange(event)} rows={5} placeholder="Lesson Notes" />
            </Form.Group>
          </Col>

        </Row>
        <div className="form-r5">
            <Row className="justify-content-end mb-4 mb-md-3">
              <Col sm={{ span: 4, offset: 8 }} md={{ span: 3, offset: 9 }}>
                <Button type="submit" className="btn-lg">Reserve</Button>
              </Col>
            </Row>
        </div>
      </Form>
    </Container>
  )
}

export default LessonForm;
