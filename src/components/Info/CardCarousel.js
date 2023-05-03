import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';



function CardCarousel() {

  return (<>
    <Carousel style={{ width: '18rem' }} className="mx-auto my-auto pt-4" interval={2500}>
      <Carousel.Item>
      <Card style={{ width: '18rem' }} className="bg-dark text-white info-card">
        <Card.Img variant="top" src="https://townsquare.media/site/112/files/2019/07/shaun-white.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" className="shaun-img" />
        <Card.Body>
        <Card.Title className="display-3 text-center">Sam</Card.Title>
        <Card.Text>
        <h5 className="card-text mb-2 text-center">Style: <small>Freestyle and halfpipe.</small></h5>
        <h5 className="card-text mb-2 text-center">Expertise: <small>Professional.</small></h5>
        <h5 className="card-text mb-2 text-center">Years Riding: <small>12</small></h5>
        <h5 className="card-text text-center pb-4">Other Interests: <small>Skateboarding.</small></h5>
        </Card.Text>
        </Card.Body>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem' }} className="bg-dark text-white info-card">
        <Card.Img variant="top" src="https://i.pinimg.com/originals/ef/3f/86/ef3f869470125c7d5297a35d7e2119b6.jpg" className="shaun-img" />
        <Card.Body className="">
        <Card.Title className="display-3 text-center">Tim</Card.Title>
        <Card.Text>
        <h5 className="card-text mb-2 text-center">Style: <small>Freeride/backcountry.</small></h5>
        <h5 className="card-text mb-2 text-center">Expertise: <small>Professional.</small></h5>
        <h5 className="card-text mb-2 text-center">Years Riding: <small>6</small></h5>
        <h5 className="card-text text-center pb-4">Other Interests: <small>Surfing.</small></h5>
        </Card.Text>
        </Card.Body>
      </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem' }} className="bg-dark text-white info-card">
        <Card.Img variant="top" src="/images/Halldor-Helgason-168.jpg" className="shaun-img" />
        <Card.Body>
          <Card.Title className="display-3 text-center">Kyle</Card.Title>
          <Card.Text>
          <h5 className="card-text mb-2 text-center">Style: <small>Halfpipe and rails.</small></h5>
          <h5 className="card-text mb-2 text-center">Expertise: <small>Advanced.</small></h5>
          <h5 className="card-text mb-2 text-center">Years Riding: <small>6</small></h5>
          <h5 className="card-text text-center pb-4">Other Interests: <small>Software development.</small></h5>
          </Card.Text>
        </Card.Body>
      </Card>
      </Carousel.Item>
    </Carousel>
  </>)
}

export default CardCarousel;
