//I tried to fix this long import via compiler options in tsconfig, but something wasn't working
//and I haven't had a lot of time to fix it
import { type Product } from "../../../../../libs/types/types";
import styles from "./styles.module.css";

interface Properties {
  product: Product;
}

function ProductTab({ product }: Properties) {
  return (
    <div className={styles["container"]}>
      <span>{product.name}</span>
      <span>{product.count}</span>
      <button>Details</button>
      <button>Delete</button>
    </div>
  );
}

export { ProductTab };
