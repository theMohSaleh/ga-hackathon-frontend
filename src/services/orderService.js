const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/orders`;
const token = localStorage.getItem('token');

export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const orders = await res.json();
        return orders;
    } catch (error) {
        console.log(error);
    }
}

export const show = async (orderId) => {
    try {
        const res = await fetch(`${BASE_URL}/${orderId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const order = await res.json();
        return order;
    } catch (error) {
        console.log(error);
    }
}
