import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import PostSingle from "./Pages/PostSingle/PostSingle";
import Users from "./Pages/Users/Users";
import UserSingle from "./Pages/UserSingle/UserSingle";

const routes = [
  {
    path: "/blog",
    component: Home,
    exact: true,
  },
  {
    path: "/blog/posts",
    component: Posts,
  },
  {
    path: "/blog/post/:postId",
    component: PostSingle,
  },
  {
    path: "/blog/users",
    component: Users,
    exact: true,
  },
  {
    path: "/blog/user/:userId",
    component: UserSingle,
    exact: true,
  },
];

export default routes;
