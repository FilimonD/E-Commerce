import React, { useReducer } from "react";

const StoreContext = React.createContext();
const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      const itemIndex = state.findIndex(item => {
        if (item.size) {
          return (
            item.id === action.product.id && item.size === action.product.size
          );
        } else if (item.color) {
          return (
            item.id === action.product.id && item.color === action.product.color
          );
        } else {
          return item.id === action.product.id;
        }
      });

      if (itemIndex === -1) {
        return [...state, action.product];
      } else {
        const newItem = {
          id: action.product.id,
          name: action.product.name,
          size: action.product.size,
          quantity: action.product.quantity + state[itemIndex].quantity,
          price:
            action.product.price *
            (action.product.quantity + state[itemIndex].quantity)
        };

        const updatedStore = [...state.splice(itemIndex, 1, newItem)];

        return updatedStore;
      }
    // if(item.name === product.name) {
    //   return quantity = quantity += 1
    // }
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
