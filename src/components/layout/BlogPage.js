import React, { Component } from "react";
import { Container, Row, Col, View, Button } from "mdbreact";
import Desktop from "../../img/desktop.jpg";

class BlogPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Web Mentors, znajdz i dopasuj właściwego mentora.
          </h2>

          <Row>
            <Col lg="5">
              <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img className="img-fluid" src={Desktop} alt="Sample" />
              </View>
            </Col>
            <Col lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
              <p>
                by{" "}
                <a>
                  <strong>Carine Fox</strong>
                </a>, 19/08/2018
              </p>
              <Button color="success" size="md" className="waves-light ">
                Read more
              </Button>
            </Col>
          </Row>
          <hr className="my-5" />
          <Row>
            <Col lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p>
                by{" "}
                <a>
                  <strong>Carine Fox</strong>
                </a>, 14/08/2018
              </p>
              <Button
                color="pink"
                size="md"
                className="mb-lg-0 mb-4 waves-light"
              >
                Read more
              </Button>
            </Col>
            <Col lg="5">
              <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img className="img-fluid" src={Desktop} alt="Sample" />
              </View>
            </Col>
          </Row>
          <hr className="my-5" />
          <Row>
            <Col lg="5">
              <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img className="img-fluid" src={Desktop} alt="Sample" />
              </View>
            </Col>
            <Col lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                sit amet.
              </p>
              <p>
                by{" "}
                <a>
                  <strong>Carine Fox</strong>
                </a>, 11/08/2018
              </p>
              <Button color="indigo" size="md" className="waves-light ">
                Read more
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogPage;
