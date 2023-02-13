import React, { createContext, useEffect, useState } from 'react';
// import { SHOP_DATA } from '../shop-data';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // // how to add to Firebase quickly
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA).then((r) =>
  //     console.log('db successful ::', r)
  //   );
  // }, []);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
