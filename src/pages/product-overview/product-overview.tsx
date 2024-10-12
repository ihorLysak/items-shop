import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { actions as navigationActions } from "../../store/features/navigation.slice";

function ProductOverview() {
  const dispatch = useAppDispatch();

  const handleRedirectClick = useCallback(() => {
    dispatch(navigationActions.redirect("products-list"));
  }, [dispatch]);

  return (
    <div>
      Product Overview
      <button onClick={handleRedirectClick}>to overView</button>
    </div>
  );
}

export { ProductOverview };
