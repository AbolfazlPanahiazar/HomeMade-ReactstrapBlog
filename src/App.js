import React from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import routes from "./routes.js";

function App() {
  return (
    <Container bg="primary">
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Container>
  );
}

export default App;
