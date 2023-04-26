import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function LessonForm() {
  return (
    <Container fluid>
    <Form>
      <Row className="form-rows">
        <Col md={6}>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label htmlFor="inputFirstName">First Name:</Form.Label>
            <Form.Control className="form-name" type="text" id="inputFirstName" placeholder="First Name"  />
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label htmlFor="imputLastName">Last Name:</Form.Label>
            <Form.Control className="form-name" type="text" id="inputLastName" placeholder="Last Name"  />
        </Form.Group>
        </Col>
      </Row>
      <Row className="form-rows">
        <Col md={4}>
        <div>
          <Form.Label  htmlFor="">Instructor: </Form.Label>
          <span className="purp"> Lorem ips</span>
        </div>
        </Col>
        <Col md={3}>
        <div>
          <Form.Label  htmlFor="">Type: </Form.Label>
          <span className="purp"> Lorem ips</span>
        </div>
        </Col>
        <Col md={5}>
          <Form.Group className="mb-3 radio-group" key="lesson-length">
            <Form.Label >Lesson Length:</Form.Label>
            <div className="radios">
            <Form.Check type="radio" id="full-day-radio" label="Full Day"  />
            <Form.Check type="radio" id="half-day-radio" label="Half Day"  />
            </div>
          </Form.Group>
        </Col>

      </Row>
      <Row className="form-rows">
      <Col md={4}>
      <div>
        <Form.Label  htmlFor="">Price: </Form.Label>
        <span className="purp"> Lorem ips</span>
      </div>
      </Col>
        <Col md={4}>
        <Form.Label >Date:</Form.Label>
        <span> Nov 4 </span>
        </Col>
        <Col md={4}>
        <Form.Label >Time:</Form.Label>
        <span> 11:30 a.m. </span>
        </Col>

      </Row>
      <Row className="form-rows">
        <Form.Group className="mb-3 form-row" key="">
          <Form.Label >Lesson Notes:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <div className="row-flex">
      <Form.Group as="row">

        <Button type="submit">Reserve</Button>

      </Form.Group>
      </div>
    </Form>
    </Container>

  )
}

export default LessonForm;
