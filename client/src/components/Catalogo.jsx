import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";

function Catalogo() {
  const Productos = useSelector((state) => state.productos);
  return (
    <div>
      <Jumbotron>
        <h1>Bienvenido!</h1>
        <p>
          ML Search es una aplicación hecha en React / Redux / Node para buscar
          productos consumiendo la API de Mercado Libre.
          <br />
          Este proyecto se entrega dentro del ámbito de Henry Labs.
        </p>
        <p>
          <Button variant="primary">Contacta al desarrollador</Button>
        </p>
      </Jumbotron>
      <Row>
        {!Productos.length ? (
          <Col className="ml-5">
            Realice su búsqueda en la esquina superior derecha
          </Col>
        ) : (
          Productos.map((p) => (
            <ProductCard
              imagen={p.thumbnail}
              title={p.title}
              price={p.price}
              condition={p.condition}
              stock={p.available_quantity}
              id={p.id}
            />
          ))
        )}
      </Row>
    </div>
  );
}

export default Catalogo;
