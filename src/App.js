import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import routes from "./routes.js";

// Components
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Container bg="primary">
      <Header />
      <Row className="d-flex">
        <Col xs={12} md={8}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Col>
        <Col xs={12} md={4}>
          <SideBar />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
