import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Loading from "../Loading/Loading";

function UserSingle() {
  const { userId } = useParams({});

  const [user, setUser] = useState({});

  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/users/${userId}`)
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
    fetch(`https://jsonplaceholder.ir/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Card className="mt-2">
            <CardImg top width="100%" src={user.avatar} alt="Card image cap" />
            <CardBody>
              <CardTitle className="text-right">نام و نام خانوادگی: {user.name}</CardTitle>
              <CardSubtitle className="text-right">{user.username} :نام کاربری</CardSubtitle>
              <CardSubtitle className="text-right">{user.email} :پست الکترونیک</CardSubtitle>
              <CardSubtitle className="text-right">{user.phone} :شماره تماس</CardSubtitle>
              <CardSubtitle className="text-right">
                <a href={user.website}>{user.website}</a> :وبسایت
              </CardSubtitle>
            </CardBody>
          </Card>
          <h4 className="mt-3 text-right">پست ها منتشر شده توسط این کاربر</h4>
          {posts.map((post) => (
            <Card key={post.id} dir="rtl" className="text-right my-2 bg-dark text-light">
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.body}</CardSubtitle>
                <Link className="mt-2" to={`/blog/post/${post.id}`}>
                  <Button>مشاهده ی پست</Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </main>
      )}
    </>
  );
}

export default UserSingle;
