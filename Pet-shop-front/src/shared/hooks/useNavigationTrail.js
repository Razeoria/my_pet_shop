import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectStableCategories,
  selectStableProducts,
  selectCurrentProduct
} from "../state/selectors/memoSelectors"; // путь подгони под себя

export function useNavigationTrail() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const groups = useSelector(selectStableCategories);
  const products = useSelector(selectStableProducts);
  const current = useSelector(selectCurrentProduct);

  const parts = pathname.split("/").filter(Boolean);

  return useMemo(() => {
    const nav = [{ name: "Home", to: "/" }];

    const findGroup = (gid) => groups.find(g => String(g.id) === String(gid));
    const findProduct = (pid) => products.find(p => String(p.id) === String(pid));

    if (parts.includes("categories")) {
      nav.push({ name: "Categories", to: "/categories" });

      if (id) {
        const group = findGroup(id);
        if (group) {
          nav.push({ name: group.title, to: `/categories/${group.id}` });
        }
      }
    }

    if (parts.includes("products")) {
      nav.push({ name: "Categories", to: "/categories" });

      const item = findProduct(id) || current;
      if (item?.categoryId) {
        const group = findGroup(item.categoryId);
        if (group) {
          nav.push({ name: group.title, to: `/categories/${group.id}` });
        }
      }

      if (item) {
        nav.push({ name: item.title, to: `/products/${item.id}` });
      }
    }

    if (parts.includes("sales")) {
      nav.push({ name: "Discounts", to: "/discount" });
    }

    return nav;
  }, [pathname, id, groups, products, current]);
}


