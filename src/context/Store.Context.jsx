// import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cart, setCart] = useState({});

//   // ✅ Add item to cart
//   const addToCart = (itemId) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [itemId]: prevCart[itemId] ? prevCart[itemId] + 1 : 1,
//     }));
//   };

//   // ✅ Remove item from cart
//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => {
//       const newCart = { ...prevCart };
//       if (newCart[itemId] > 1) newCart[itemId] -= 1;
//       else delete newCart[itemId];
//       return newCart;
//     });
//   };

//   // ✅ Get total count (optional)
//   const getTotalItems = () => {
//     return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
//   };

//   const contextValue = {
//     food_list,
//     cart,
//     addToCart,
//     removeFromCart,
//     getTotalItems,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id] -= 1;
      else delete updated[id];
      return updated;
    });
  };


   // 🧮 Get total item count
  const getTotalCartCount = () =>
    Object.values(cart).reduce((sum, num) => sum + num, 0);


  const contextValue = {
    food_list,
    cart,
    addToCart,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getTotalCartCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
