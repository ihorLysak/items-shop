import { useCallback, useState } from "react";

import styles from "./styles.module.css";
import { Product } from "../../types/types";

interface Properties {
  handleConfirm: (product: Omit<Product, "id">) => void;
  handleCancel: () => void;
  product?: Product;
}

function ProductModal({ handleConfirm, handleCancel, product }: Properties) {
  const [name, setName] = useState(product?.name || "");
  const [count, setCount] = useState(product?.count);
  const [width, setWidth] = useState(product?.size.width);
  const [height, setHeight] = useState(product?.size.height);
  const [weight, setWeight] = useState(product?.weight || "");

  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const handleCountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(event.target.value));
    },
    []
  );

  const handleWidthChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setWidth(Number(event.target.value));
    },
    []
  );

  const handleHeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHeight(Number(event.target.value));
    },
    []
  );

  const handleWeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(event.target.value);
    },
    []
  );

  const handleConfirmClick = useCallback(() => {
    handleConfirm({
      name,
      count: count as number,
      imageUrl: "",
      size: {
        height: height as number,
        width: width as number,
      },
      weight: "",
      comments: [],
    });
  }, [name, count, handleConfirm, height, width]);

  return (
    <div className={styles["background"]}>
      <div className={styles["container"]}>
        <div className={styles["input-container"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="count">Count:</label>
          <input
            type="number"
            id="count"
            value={count}
            onChange={handleCountChange}
          />
        </div>
        <div className={styles["size-inputs"]}>
          <div className={styles["input-container"]}>
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={handleWidthChange}
            />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="count">Weight:</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <div className={styles["buttons-container"]}>
          <button onClick={handleConfirmClick}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export { ProductModal };
