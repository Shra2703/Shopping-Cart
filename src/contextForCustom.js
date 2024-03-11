import { createContext, useState, useContext } from "react";

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
  }

  console.log(children);
  return (
    <itemContext.Provider
      value={{ total, setItem, item, setTotal, handleAdd, handleRemove, handleReset }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useContextCustom };
export default CustomItemContext;
