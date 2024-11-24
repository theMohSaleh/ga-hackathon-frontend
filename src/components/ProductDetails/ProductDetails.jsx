// src/components/ProductDetails/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import * as productService from '../../services/productService';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) return <div> Loading... <Spinner animation="border" role="status" /></div>;

  return (
    <Container className='mt-3'>
      <header>
        <div>
          <h1>{product.product_name}</h1>
          <p>Category: {product.category}</p>
          <p>Sub-category: {product.sub_category}</p>
          <p>Cost: ${product.product_cost_to_consumer}</p>
          {/* <p>Sustainability Features: {product.sustainabilityFeatures.join(', ')}</p> */}
          {/* <p>Carbon Footprint: {product.carbonFootprint} kg CO2</p> */}
        </div>
      </header>
    </Container>
  );
};

export default ProductDetails;
