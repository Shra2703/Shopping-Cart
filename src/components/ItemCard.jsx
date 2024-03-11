import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../context";

function ItemCard({ name, price }) {
  let value = useContext(itemContext);
  
  const handleAdd = (price) => {
      
      value.setTotal(value.total + price)
      value.setItem((prev) => prev + 1)
  };

  const handleRemove = (price) => {
    if(value.total > 0) {

      value.setTotal(value.total - price)
      value.setItem((prev) =>  prev - 1)
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
