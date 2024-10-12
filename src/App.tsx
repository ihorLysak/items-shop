import { ProductOverview, ProductsList } from "./pages/pages";
import { useAppSelector } from "./store/hooks/hooks";

function App() {
  //usually I would use react-router for this, but it wasn't in the tech stack for this test
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  console.log(currentPage);

  return (
    <>
      {currentPage === "product-overview" ? (
        <ProductOverview />
      ) : (
        <ProductsList />
      )}
    </>
  );
}

export default App;
