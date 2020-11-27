import { PRODUCTOS, CONDICION, DETALLES } from "./actions";

const initialState = {
  productoactual: "",
  productos: [],
  offsetactual: "0",
  ordenactual: "",
  condicion: "",
  detalles: [],
  imagenes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTOS: {
      return {
        ...state,
        productoactual: action.payload.query,
        productos: action.payload.results,
        offsetactual: action.payload.paging.offset,
        ordenactual: action.payload.sort.id,
      };
    }
    case CONDICION: {
      return {
        ...state,
        productoactual: action.payload.query,
        productos: action.payload.results,
        offsetactual: action.payload.paging.offset,
        ordenactual: action.payload.sort.id,
        condicion: action.payload.filters,
      };
    }
    case DETALLES: {
      return {
        ...state,
        detalles: action.payload,
        imagenes: action.payload.pictures,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
