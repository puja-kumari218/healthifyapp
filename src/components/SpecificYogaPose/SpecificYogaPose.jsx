import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./SpecificYogaPose.scss";

const SpecificYogaPose = () => {
  const { yogaPoseId } = useParams();
  const [singleYogaPose, setSingleYogaPose] = useState([]);

  //   console.log(yogaPoseId);

  useEffect(() => {
    const getSingleYogaPose = async () => {
      try {
        const response = await axios.get(
          `https://healthify-app-backend.onrender.com/api/specific-yoga-pose/${yogaPoseId}`
        );

        // console.log(response);

        setSingleYogaPose([response.data]);

        // console.log([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleYogaPose();
  }, [yogaPoseId]);

  console.log(singleYogaPose);

  return (
    <div className="specific-yoga-pose-container">
      <Container fluid style={{ padding: "5%" }}>
        <Row style={{ textAlign: "center", padding: "5%" }}>
          {singleYogaPose.map((yogaPose, index) => {
            return (
              <Col
                id={yogaPose._id}
                key={index}
                xs={6}
                md={4}
                lg={3}
                style={{ marginBottom: "2%" }}
              >
                <Card style={{width: 450, cursor: "pointer"}}>
                <iframe className="yoga-demo-video" src={`https://www.youtube.com/embed/${yogaPose.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Card.Img variant="top" src={yogaPose.imgUrl} style={{width: "100%", height: 200, position: "absolute"}}/> 
                  <Card.Body className="card-details">
                    <Card.Title>{yogaPose.posename}</Card.Title>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Category</span>
                        <span className="yoga-pose-category">{yogaPose.category}</span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Duration</span>
                        <span className="yoga-pose-category">{yogaPose.duration}</span>
                    </Card.Text>
                    <Card.Text className="yoga-pose-info">
                        <span className="yoga-details">Relaxation Time</span>
                        <span className="yoga-pose-category">{yogaPose.relaxationTime}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SpecificYogaPose;
