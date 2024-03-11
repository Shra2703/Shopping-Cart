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
  const handleAdd = (price) => {
    setTotal(total + price);
    setItem((prev) => prev + 1);
  };

  const handleRemove = (price) => {
    if (total > 0) {
      setTotal(total - price);
      setItem((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
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
