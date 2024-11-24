const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`;
const token = localStorage.getItem('token');

export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const products = await res.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}

export const show = async (productId) => {
    try {
        const res = await fetch(`${BASE_URL}/${productId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const product = await res.json();
        return product;
    } catch (error) {
        console.log(error);
    }
}
