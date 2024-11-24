// src/components/ProductList/ProductList.jsx
import { Container, Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ProductList = (props) => {
    const navigate = useNavigate();

    const handleBuyProduct = (productId) => {
        navigate(`/products/${productId}`)
    }

    return (
        <Container className='mt-3'>
            <h1>Product List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {props.products.map((product) => (
                    <Stack key={product._id} style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
                        <h3>{product.product_name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Sub-category: {product.sub_category}</p>
                        <p>Cost: ${product.product_cost_to_consumer}</p>
                        <Button onClick={() => handleBuyProduct(product._id)}>Buy Now!</Button>
                    </Stack>
                ))}
            </div>
        </Container>
    );
};

export default ProductList;
