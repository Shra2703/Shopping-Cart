import React from "react";
import styles from "../styles/CartModal.module.css";
import { useContextCustom } from "../contextForCustom";

function CartModal(props) {

  let {handleCloseCart} = props;

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleCloseCart}>
        Close
      </div>
      <div className={styles.clearButton} >
        Clear
      </div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
