import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCondicion, getProductos } from "../redux/actions";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const Producto = useSelector((state) => state.productoactual);
  const Pagina = useSelector((state) => state.offsetactual);
  var Orden = useSelector((state) => state.ordenactual);
  var Condicion = useSelector((state) => state.condicion);

  useEffect(() => {
    dispatch(getProductos(Producto, Pagina, Orden));
    dispatch(getCondicion(Condicion));
  }, [getProductos, getCondicion]);

  function submitBusqueda(e, data) {
    e.preventDefault();

    dispatch(getProductos(data));
  }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{ color: "white" }} href="/">
          Mercado Libre Search
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="btn-danger"
              onClick={() => {
                dispatch(getProductos(Producto, Pagina - 20, Orden));
              }}
            >
              Anterior
            </Nav.Link>
            <Nav.Link
              className="btn-warning"
              onClick={() => {
                dispatch(getProductos(Producto, Pagina + 20, Orden));
              }}
            >
              Siguiente
            </Nav.Link>
            <NavDropdown
              className="btn-success"
              title="Opciones de Búsqueda"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  dispatch(
                    getProductos(Producto, Pagina * 0, (Orden = "price_desc"))
                  );
                }}
              >
                Mayor precio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch(
                    getProductos(Producto, Pagina * 0, (Orden = "price_asc"))
                  );
                }}
              >
                Menor precio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch(
                    getCondicion(
                      Producto,
                      Pagina,
                      Orden,
                      (Condicion = "2230284")
                    )
                  );
                }}
              >
                Nuevo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch(
                    getCondicion(
                      Producto,
                      Pagina,
                      Orden,
                      (Condicion = "2230581")
                    )
                  );
                }}
              >
                Usado
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="btn-primary"
              onClick={() => {
                dispatch(getProductos(Producto));
              }}
            >
              Página inicial
            </Nav.Link>
          </Nav>
          <Form onSubmit={(e) => submitBusqueda(e, input)} inline>
            <FormControl
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ejemplo: zapatillas"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default SearchBar;
