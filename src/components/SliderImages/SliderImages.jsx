import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function SliderImages(props) {
  return (
    <div>
      <Carousel style={{height: "55%", width: "100%"}} fade variant='dark'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.imageUrl1}
            alt="First slide"
            style={{height: "500px", width: "100%"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.imageUrl2}
            alt="Second slide"
            style={{height: "500px", width: "100%"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.imageUrl3}
            alt="Third slide"
            style={{height: "500px", width: "100%"}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
