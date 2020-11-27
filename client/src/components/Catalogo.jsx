import React, { useEffect } from "react";
import { getProductos, getCondicion } from "../redux/actions.js";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button, Col, Jumbotron, Nav, Row } from "react-bootstrap";

function Catalogo() {
  const dispatch = useDispatch();
  const Producto = useSelector((state) => state.productoactual);
  const Productos = useSelector((state) => state.productos);
  const Pagina = useSelector((state) => state.offsetactual);
  var Orden = useSelector((state) => state.ordenactual);
  var Condicion = useSelector((state) => state.condicion);

  useEffect(() => {
    dispatch(getProductos(Producto, Pagina, Orden));
    dispatch(getCondicion(Condicion));
  }, [getProductos, getCondicion]);

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
