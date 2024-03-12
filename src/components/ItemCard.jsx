import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { itemContext } from "../context";

// use for custom context provider
import { useContextCustom } from "../contextForCustom";

function ItemCard({ id, name, price }) {

  // let value = useContext(itemContext);

  let {handleAdd, handleRemove} = useContextCustom();

  // lifting this to the spearate file used if we are not using the custom hooks and custom context
  // const handleAdd = (price) => {
      
  //     value.setTotal(value.total + price)
  //     value.setItem((prev) => prev + 1)
  // };

  // const handleRemove = (price) => {
  //   if(value.total > 0) {

  //     value.setTotal(value.total - price)
  //     value.setItem((prev) =>  prev - 1)
  //   }
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id,price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
