import Stack from 'react-bootstrap/Stack';

function ProductList() {
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">First item</div>
                <div className="p-2">Second item</div>
                <div className="p-2">Third item</div>
            </Stack>
        </>
    )
}

export default ProductList