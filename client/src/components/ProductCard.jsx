import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ProductCard = ({ imagen, title, price, condition, stock, id }) => {
  return (
    <Card
      style={{
        width: "20rem",
        margin: "5rem",
      }}
    >
      <img style={{ objectFit: "contain" }} src={imagen}></img>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Card.Title>{title}</Card.Title>
        </ListGroupItem>
        <ListGroupItem>AR$ {price}</ListGroupItem>
        <ListGroupItem>Stock Disponible: {stock}</ListGroupItem>
        <ListGroupItem>
          Condicion: {condition === "new" ? "nuevo" : "usado"}
        </ListGroupItem>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
};

export default ProductCard;
