import React, { useReducer } from "react";

const StoreContext = React.createContext();
const initialState = [];

const findItemIndex = (state, product) =>
  product.size
    ? state.findIndex(
        item => item.id === product.id && item.size === product.size
      )
    : product.color
    ? state.findIndex(
        item => item.id === product.id && item.color === product.color
      )
    : state.findIndex(item => item.id === product.id);

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      const itemIndex = findItemIndex(state, action.product);

      if (itemIndex === -1) {
        return [...state, action.product];
      } else {
        const newItem = {
          id: action.product.id,
          name: action.product.name,
          size: action.product.size,
          color: action.product.color,
          quantity: action.product.quantity + state[itemIndex].quantity,
          price: action.product.price.toFixed(2)
          // price:
          //   action.product.price *
          //   (action.product.quantity + state[itemIndex].quantity)
        };
        const updatedStore = [
          ...state.slice(0, itemIndex),
          ...state.slice(itemIndex + 1, state.length),
          newItem
        ];
        return updatedStore;
      }

    case "remove":
      const productIndex = state.findIndex(
        item => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

// export default function Product() {
//   const [cart, setCart] = useReducer(cartReducer, []);
