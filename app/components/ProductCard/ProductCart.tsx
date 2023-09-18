import AddToCart from "../AddToCart";
import styles from "./Product.module.css";

const ProductCart = () => {
  return (
    <div className={styles.card}>
      <h1>Product-Cart Main Page </h1>
      <AddToCart />
    </div>
  );
};

export default ProductCart;
