import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import ItemData from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={100} />
    </div>
  );
}

export default Items;
