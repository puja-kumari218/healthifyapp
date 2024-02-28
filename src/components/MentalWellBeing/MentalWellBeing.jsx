import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SliderImages from "../SliderImages/SliderImages";
import data from "../../videos.json";
import bookslist from "../../books.json";
import "./MentalWellBeing.scss";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";

const imgUrl1 =
  "https://www.collidu.com/media/catalog/product/img/0/9/0907bd707dbebdf68c51ea70c9f0feeba4d701f13a41b4135e80c27d3bbf84e8/spiritual-health-slide1.png";
const imgUrl2 =
  "https://www.collidu.com/media/catalog/product/img/b/8/b8209cc27c130da312583d60694979d81cee1f3a6488b0082480325ae28434fd/spiritual-health-slide2.png";
const imgUrl3 =
  "https://www.collidu.com/media/catalog/product/img/c/2/c25c596399bb1b1fbd080926bb539d82143984fc49dfdcd62f7469f6692306a9/spiritual-health-slide5.png";

const MentalWellBeing = () => {
  const [spiritualVideos, setSpiritualVideos] = useState([]);
  const [spiritualBooks, setSpiritualBooks] = useState([]);
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {

    if (localStorage.getItem("token") !== null) {
      setauthenticated(true);
      setSpiritualVideos(data.videos);
      setSpiritualBooks(bookslist.books);
    }
  }, [authenticated]);

  if (localStorage.getItem("token") === null) {
    return <Navigate replace to="/login" />;
  } else{


  return (
    <>
      <SliderImages
        imageUrl1={imgUrl1}
        imageUrl2={imgUrl2}
        imageUrl3={imgUrl3}
      />

      <div className="mental-wellbeing">
        <div className="recommended-videos">


          <h1 style={{marginTop: 40}}>Recommended Spiritual Videos</h1>

          <Container
            fluid
            style={{ padding: "1%"}}
            className="videos-container"
          >
            <Row style={{ textAlign: "center" }}>
              {spiritualVideos.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    lg={4}
                    style={{ marginBottom: "2%" }}
                  >
                    <Card className="video-card-container">
                    <iframe  src={`https://www.youtube.com/embed/videoseries?list=${item.videoID}`}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className="recommended-books">

          <h1>Recommended Spiritual Books</h1>
          <Container
            fluid
            style={{ padding: "1%"}}
            className="videos-container"
          >
            <Row style={{ textAlign: "center" }}>
              {spiritualBooks.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    lg={4}
                    style={{ marginBottom: "2%" }}
                  >
                    <Card className="video-card-container" style={{ height: 520}}>
                      <Link to={item.buyUrl}><Card.Img variant="top" src={item.imgUrl} style={{width: "100%", height: 380}} /></Link>
                      <Card.Body> 
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          {item.author}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  )}
};

export default MentalWellBeing;
