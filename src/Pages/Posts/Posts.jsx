import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.ir/posts")
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      });
  }, []);

  return (
    <main>
      <Row xs={1} lg={2}>
        {posts.map((post) => (
          <Col>
            <Link className="text-light" to={`/blog/post/${post.id}`}>
              <Card style={{ minHeight: "450px" }} className="my-3">
                <CardImg top width="100%" src={`https://picsum.photos/id/${post.id + 3}/600/400`} alt="Card image cap" />
                <CardBody className="text-right bg-dark text-light">
                  <CardTitle>{post.title}</CardTitle>
                  <CardSubtitle>{post.body}</CardSubtitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Posts;
