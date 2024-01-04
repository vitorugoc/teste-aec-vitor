import React from "react";

import "./styles.css"
import products from "../../data";
import { Product } from '../../data';

interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = () => {
    return (
      <div>
        {products.map((product: Product) => (
          <div>
            {product.name}
          </div>
        ))}
      </div>
    );
  };

export default HomeScreen;