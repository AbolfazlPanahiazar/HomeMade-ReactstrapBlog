import React, { useState, useEffect } from "react";
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Users() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.ir/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default Users;
