import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function SideBar() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.ir/photos")
      .then((response) => response.json())
      .then((response) => {
        setPhotos(response.filter((item, index) => index < 3));
      });
  }, []);

  return (
    <aside>
      {photos.map((photo) => (
        <Card key={photo.id} className="my-2 bg-dark text-light">
          <CardImg top width="100%" src={`https://picsum.photos/id/${photo.id * 53}/600/300`} alt="Card image cap" />
          <CardBody className="text-center">
            <CardTitle>{photo.title}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </aside>
  );
}

export default SideBar;
