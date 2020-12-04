import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title"> All prices subject to availability</h2>
              <h4 className="description">Hello, there. Let us help you start your search for cheap airfare and travel deals. Whether it’s a romantic weekend getaway, family vacation, bucket-list trip to your dream destination, or a business trip with a side of fun, we have you covered. Affordable domestic and international flights are what we do best
              </h4>
              <div className="btn-wrapper">
                <Button
                onClick={event=>event.preventDefault()}
                  className="btn-round"
                  color="primary"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contact Us
                </Button>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="/landing-page"
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  Go To Plan
                </Button>
              </div>
            </Col>
          </Row>
          <div className="blur-hover">
            <a href="#">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
                <i className="icon tim-icons icon-coins" />
                {/* Right 1 */}
                <i className="icon icon-sm tim-icons icon-spaceship" />
                <i className="icon icon-sm tim-icons icon-money-coins" />
                <i className="icon icon-sm tim-icons icon-link-72" />
                {/* Right 2 */}
                <i className="icon tim-icons icon-send" />
                <i className="icon tim-icons icon-mobile" />
                <i className="icon tim-icons icon-wifi" />
                {/* Left 1 */}
                <i className="icon icon-sm tim-icons icon-key-25" />
                <i className="icon icon-sm tim-icons icon-atom" />
                <i className="icon icon-sm tim-icons icon-satisfied" />
                {/* Left 2 */}
                <i className="icon tim-icons icon-gift-2" />
                <i className="icon tim-icons icon-tap-02" />
                <i className="icon tim-icons icon-wallet-43" />
              </div>
              <h5 className="blur-hidden h5 text-primary">
              Check out other popular flight routes found by fellow travelers
              </h5>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;
