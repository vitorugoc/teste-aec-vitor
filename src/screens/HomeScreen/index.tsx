import React from 'react';
import "./styles.css";
import { Product } from '../../data';
import ProductCard from "../../components/ProductCard";
import { useFilterProducts } from "../../hooks/filterProducts/useFilterProducts";

interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { filteredProducts, allProducts } = useFilterProducts();

  const productsToRender = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="products__wrapper">
      {productsToRender.map((product: Product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default HomeScreen;
