import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useContextCustom() {
  let value = useContext(itemContext);
  return value;
}

// for Custom Context
// Increases the readability, maintainabilty and it is easy to deploy

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [show, setshow] = useState(false);
  const [cart, setCart] = useState([]);
  const handleAdd = (product) => {
    setTotal(total + product.price);
    setItem((prev) => prev + 1);
    const index = cart.findIndex((item) => item.id === product.id);
    if (index == -1) setCart([...cart, { ...product, qty: 1 }]);
    else {
      cart[index].qty++;
      setCart(cart);
    }
    console.log(cart);
  };

  const handleRemove = (id, price) => {
    
    const index = cart.findIndex((item) => item.id === id);
    if (index != -1) {
      setItem((prev) => prev - 1);
      setTotal(total - cart[index].price);
      cart[index].qty--;
      if(cart[index].qty == 0){
        cart.splice(index, 1)
      }
      
    }
    setCart(cart);
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const handleCartToggle = () => {
    setshow(!show);
  };

  const handleCloseCart = () => {
    setshow(!show);
  };

  console.log(children);
  return (
    <itemContext.Provider
      value={{
        total,
        item,
        show,
        cart,
        setItem,
        setTotal,
        handleAdd,
        handleRemove,
        handleReset,
        handleCartToggle,
        setshow,
      }}
    >
      {show ? <CartModal handleCloseCart={handleCartToggle} /> : null}

      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useContextCustom };
export default CustomItemContext;
