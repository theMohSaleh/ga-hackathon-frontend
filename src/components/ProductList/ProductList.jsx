// src/components/ProductList/ProductList.jsx
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {props.products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
            <h2><Link to={`/products/${product._id}`}>{product.product_name}</Link></h2>
            <p>Category: {product.category}</p>
            <p>Sub-category: {product.sub_category}</p>
            <p>Cost: ${product.product_cost_to_consumer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
