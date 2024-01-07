import "./styles.css";

import React from 'react';

import { Product } from '../../data';
import ProductCard from "../../components/ProductCard";
import { useFilterProducts } from "../../hooks/filterProducts/useFilterProducts";
import ProductDetails from '../../components/ProductDetails';
import DetailsModalProvider from "../../context/detailsModal/DetailsModalContext";

interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { filteredProducts, allProducts } = useFilterProducts();

  const productsToRender = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="products__wrapper">
      {productsToRender.map((product: Product) => (
        <DetailsModalProvider>
          <ProductCard
            key={product._id}
            product={product}
          />
          <ProductDetails
            key={product._id}
            product={product}
          />
        </DetailsModalProvider>
      ))}
    </div>
  );
};

export default HomeScreen;
