import "./styles.css"

import products from "../../data";
import { Product } from '../../data';

import ProductCard from "../../components/ProductCard";

interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default HomeScreen;