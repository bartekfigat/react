import React, { Component } from "react";
import { Container, Row, Col, Avatar, Fa, Button } from "mdbreact";

class TeamPage extends Component {
  render() {
    return (
      <div className="TeamPage">
        <Container>
          <section>
            <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <Row>
              <Col md="4" className="mb-md-0 mb-5">
                <Avatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  className="rounded z-depth-1-half img-fluid"
                  alt="Sample avatar"
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  Maria Kate
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
                <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                  <Fa icon="facebook" />
                </Button>
                <Button
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-dribbble"
                >
                  <Fa icon="dribbble" />
                </Button>
                <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                  <Fa icon="twitter" />
                </Button>
              </Col>

              <Col md="4" className="mb-md-0 mb-5">
                <Avatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                  className="rounded z-depth-1-half img-fluid"
                  alt="Sample avatar"
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  John Doe
                </h4>
                <h6 className="text-uppercase grey-text mb-3">
                  Front-end Developer
                </h6>
                <Button
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-email"
                >
                  <Fa icon="envelope" />
                </Button>
                <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                  <Fa icon="facebook" />
                </Button>
                <Button
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-git"
                >
                  <Fa icon="github" />
                </Button>
              </Col>

              <Col md="4" className="mb-md-0 mb-5">
                <Avatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                  className="rounded z-depth-1-half img-fluid"
                  alt="Sample avatar"
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  Sarah Melyah
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
                <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                  <Fa icon="linkedin" />
                </Button>
                <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                  <Fa icon="twitter" />
                </Button>
                <Button
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-pin"
                >
                  <Fa icon="pinterest" />
                </Button>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default TeamPage;
