
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
          <Row>
            <Col sm="6">
              <Link to="landing-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/air.jpg")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="landing-page"
                tag={Link}
              >
               Go to Plan
              </Button>
            </Col>
            <Col sm="6">
              <Link to="profile-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/air.jpg")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="profile-page"
                tag={Link}
              >
                View Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
