import { ProductOverview, ProductsList } from "./pages/pages";
import { useAppSelector } from "./store/hooks/hooks";
import styles from "./app.module.css";

function App() {
  //usually I would use react-router for this, but it wasn't in the tech stack for this test
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  console.log(currentPage);

  return (
    <div className={styles["page-container"]}>
      <header className={styles["header"]}>
        <span>Items Shop</span>
      </header>
      {currentPage === "product-overview" ? (
        <ProductOverview />
      ) : (
        <ProductsList />
      )}
    </div>
  );
}

export default App;
