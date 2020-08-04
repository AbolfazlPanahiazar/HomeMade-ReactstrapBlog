import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Loading from "../Loading/Loading";

function PostSingle() {
  const { postId } = useParams({});

  const [isLoading, setIsLoading] = useState(true);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [auther, setAuther] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/posts/${postId}`)
      .then((response) => response.json())
      .then((response) => {
        setPost(response);
        fetch(`https://jsonplaceholder.ir/users/${response.userId}`)
          .then((res) => res.json())
          .then((res) => {
            setAuther(res);
            setIsLoading(false);
          });
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Card className="mt-2">
            <CardImg top width="100%" src={`https://picsum.photos/id/${post.id + 3}/600/400`} alt="Card image cap" />
            <CardBody className="text-right">
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>تاریخ انتشار: دوازده مرداد ۱۳۹۹</CardSubtitle>
              <CardText>{post.body.repeat(30)}</CardText>
            </CardBody>
          </Card>
          <Card className="mt-1 bg-dark text-light">
            <Link className="text-light" to={`/blog/user/${auther.id}`}>
              <div dir="rtl" className="d-flex justify-content-between">
                <img src={auther.avatar} alt="auther" />
                <div className="d-flex flex-column mx-2 text-center justify-content-center">
                  <span>{auther.name}</span>
                  <span>{auther.email}</span>
                  <span>{auther.phone}</span>
                </div>
              </div>
            </Link>
          </Card>
        </main>
      )}
    </>
  );
}

export default PostSingle;
