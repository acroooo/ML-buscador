//IMPORTS
import axios from "axios";
//EXPORTS
export const PRODUCTOS = "PRODUCTOS";
export const CONDICION = "CONDICION";
export const DETALLES = "DETALLES";

const url = `http://localhost:3001/api`;

export function getProductos(payload, offset = 0, sort) {
  return function (dispatch) {
    axios
      .get(`${url}/search?q=${payload}&offset=${offset}&sort=${sort}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: PRODUCTOS, payload: data });
      })
      .catch((error) => alert(error));
  };
}

export function getCondicion(payload, offset = 0, sort, condition) {
  return function (dispatch) {
    axios
      .get(
        `${url}/search/cond?q=${payload}&offset=${offset}&sort=${sort}&ITEM_CONDITION=${condition}`
      )
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: CONDICION, payload: data });
      })
      .catch((error) => alert(error));
  };
}

export function getDetalles(id) {
  return function (dispatch) {
    axios
      .get(`${url}/item/${id}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: DETALLES, payload: data });
      })
      .catch((error) => alert(error));
  };
}
