// src/components/ProductDetails/ProductDetails.jsx
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const user = useContext(AuthedUserContext);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productService.show(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div> Loading... </div>;

  return (
    <div>
      <header>
        <div>
          <h1>{product.product_name}</h1>
          <p>Category: {product.category}</p>
          <p>Sub-category: {product.sub_category}</p>
          <p>Cost: ${product.product_cost_to_consumer}</p>
          <p>Sustainability Features: {product.sustainabilityFeatures.join(', ')}</p>
          <p>Carbon Footprint: {product.carbonFootprint} kg CO2</p>
        </div>
      </header>
    </div>
  );
};

export default ProductDetails;
