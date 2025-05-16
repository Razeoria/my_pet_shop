import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

export default api;

export const getProducts = () => api.get('/products/all');
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get('/categories/all');
export const getCategoryById = (id) => api.get(`/categories/${id}`);

export const sendCoupon = async (values) => {
    try {
    const { data } = await api.post('/sale/send', values);
    return data;
    } catch (err) {
    const msg = err.response?.data?.message || err.message || 'Unknown error';
    throw new Error(msg);
    }
};

