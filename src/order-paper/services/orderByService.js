import axios from "axios";

export const getOrderByList = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/order-paper/order-by-list');
        return response.data;
    } catch (error) {
        throw new Error('Your Team is Not found');
    }
}