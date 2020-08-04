import React, { useState, useEffect } from "react";
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.ir/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <main>
      <Row xs={1} md={2} xl={3}>
        {users.map((user) => (
          <Col>
            <Link style={{ color: "#ddd" }} to={`/blog/user/${user.id}`}>
              <Card className="my-2 bg-dark">
                <CardImg top width="100%" src={user.avatar} alt="Card image cap" />
                <CardBody className="text-center">
                  <CardTitle>{user.name}</CardTitle>
                  <CardSubtitle>{user.email}</CardSubtitle>
                  <CardText>{user.phone}</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Users;
