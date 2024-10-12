import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { actions as productsListActions } from "../../store/features/products-list/products-list";
import { Loader, ProductModal } from "../../libs/components/components";
import { ProductTab, HeaderTab } from "./libs/components/components";
import styles from "./styles.module.css";
import { Product } from "../../libs/types/product.type";

function ProductsList() {
  const { isLoading, products } = useAppSelector((state) => {
    return {
      isLoading: state.productsList.isLoading,
      products: state.productsList.products,
    };
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsListActions.getAllProducts());
  }, [dispatch]);

  const handleConfirm = useCallback(
    async (product: Omit<Product, "id">) => {
      void dispatch(productsListActions.createProduct(product));
      setIsModalOpen(false);
    },
    [dispatch]
  );

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles["container"]}>
      {isModalOpen && (
        <ProductModal
          handleConfirm={handleConfirm}
          handleCancel={handleModalToggle}
        />
      )}
      <div className={styles["page-heading"]}>
        <h1>Products List</h1>
        <button onClick={handleModalToggle}>+ Add new</button>
      </div>
      <div>
        <HeaderTab />
        {products.map((product) => {
          return <ProductTab key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export { ProductsList };
