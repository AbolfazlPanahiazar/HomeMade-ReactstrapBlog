import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "../../Assets/Images/users.jpg";
import Posts from "../../Assets/Images/posts.jpg";
import Loading from "../Loading/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Link to="/blog/posts">
            <img className="w-100 my-2" src={Users} alt="users img" />
          </Link>
          <Link to="./blog/users">
            <img className="w-100 my-2" src={Posts} alt="posts image" />
          </Link>
        </main>
      )}
    </>
  );
}

export default Home;
