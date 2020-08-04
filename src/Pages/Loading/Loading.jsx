import React from "react";
import { Spinner } from "reactstrap";

function Loading() {
  return (
    <main style={{ height: "100vh" }} className="bg-dark d-flex mt-2 justify-content-center align-items-center">
      <Spinner style={{ width: "4rem", height: "4rem" }} color="light" />
    </main>
  );
}

export default Loading;
