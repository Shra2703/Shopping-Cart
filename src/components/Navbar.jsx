import React from "react";
import styles from "../styles/Total.module.css";
import styles2 from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { itemContext } from "../context";

// Custom context provider
import { useContextCustom } from "../contextForCustom";
import CartModal from "./CartModal";

function Navbar() {
  // let value = useContext(itemContext);
  let { total, item, show, handleReset, handleCartToggle } = useContextCustom();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles2.itemButton} onClick={handleCartToggle}>
        Cart
      </button>
      <button className={styles2.itemButton} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Navbar;
