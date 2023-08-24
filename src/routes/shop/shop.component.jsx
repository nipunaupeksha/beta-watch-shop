import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// context
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { setCategories } from "../../store/categories/category.action";

// thunk
// import { fetchCategoriesAsync } from "../../store/categories/category.action";

// saga
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();
  // context

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments("categories");
  //     dispatch(setCategories(categoriesArray));
  //   };

  //   getCategoriesMap();
  // }, []);

  // using thunk

  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, []);

  // saga

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
