
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/air.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/air.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/air.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/air.jpg")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/air.jpg")}
        />
        <div className="section">
          <Container>
            <div className="title">
            </div>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                Latest travel tips and inspiration
                </h1>
                <p className="text-white mt-4">
                    We have you covered when it comes to value travel and the cheapest flights.
                    Browse our options to get the best deals on airline tickets, no matter where you’re headed.
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                >
                  Thanks !
                </Button>
              </Col>
              <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItems}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default JavaScript;
