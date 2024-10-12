import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { actions as navigationActions } from "../../store/features/navigation.slice";

function ProductsList() {
  const dispatch = useAppDispatch();

  const handleRedirectClick = useCallback(() => {
    dispatch(navigationActions.redirect("product-overview"));
  }, [dispatch]);

  return (
    <div>
      Products List
      <button onClick={handleRedirectClick}>Go to list</button>
    </div>
  );
}

export { ProductsList };
