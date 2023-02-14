import React, { createContext, useEffect, useState } from 'react';
// import { SHOP_DATA } from '../shop-data';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // // how to add to Firebase quickly
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA).then((r) =>
  //     console.log('db successful ::', r)
  //   );
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
