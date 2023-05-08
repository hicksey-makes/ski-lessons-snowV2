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
        <Row className="form-rows">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formLessonFName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control className="form-name" type="text" required value={props.riderName}
                onChange={event => props.onRiderAdd(event)} placeholder="First Name"  />

            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formLessonLName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control disabled className="form-name" type="text" required placeholder="Last Name"  />

            </Form.Group>
          </Col>
        </Row>
        <Row className="form-rows">
          <Col md={4}>
            <div>
              <Form.Label>Instructor: </Form.Label>
              <span className="indigo fs-4 fs-4 text-opacity-75"> {props.selectedLsn.instructorName}</span>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Form.Label>Type: </Form.Label>
              <span className="indigo fs-4"> {props.selectedLsn.lsnType}</span>
            </div>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 radio-group" key="lesson-length" controlId="formLessonRadio">
              <Form.Label>Lesson Length:</Form.Label>
              <div className="radios" id="formLessonRadio">
                <Form.Check type="radio" className="no-vald-style" id="full-day-radio"  checked={props.lessonLength === "Full Day"} name="lesson length"
                label="Full Day" value="Full Day" disabled={props.lessonLength === "Full Day"} onChange={event => props.setFullPrice(event)} />

                <Form.Check type="radio" className="no-vald-style" id="half-day-radio" checked={props.lessonLength === "Half Day"} name="lesson length"
                label="Half Day" value="Half Day" disabled={props.lessonLength === "Half Day"} onChange={event => props.setHalfPrice(event)} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="form-rows">
          <Col md={4}>
            <div>
              <Form.Label  >Price: </Form.Label>
              <span className="indigo fs-4 fw-bold fst-italic text-opacity-75"> ${props.selectedLsn.lessonCost}</span>
            </div>
          </Col>
          <Col md={4}>
            <Form.Label >Date:</Form.Label>
            <span> {((new Date(props.selectedLsn.lsnTime)).toDateString()).substring(3,10)}</span>
          </Col>
          <Col md={4}>
            <Form.Label >Time:</Form.Label>
            <span> {((new Date(props.selectedLsn.lsnTime)).toTimeString()).substring(0,5) + "am"}</span>
          </Col>
        </Row>
        <Row className="form-rows">
          <Form.Group className="mb-3 form-row" key="" controlId="formLessonLNotes">
            <Form.Label >Lesson Notes:</Form.Label>
            <Form.Control as="textarea" value={props.lessonNotes} onChange={event => props.onNotesChange(event)} rows={5} placeholder="Lesson Notes" />
          </Form.Group>
        </Row>
        <div className="">

            <Row className="justify-content-end">
            <Col md={{ span: 3, offset: 9 }}>
              <Button type="submit" className="btn-lg">Reserve</Button>
            </Col>
            </Row>

        </div>
      </Form>
    </Container>
  )
}

export default LessonForm;
