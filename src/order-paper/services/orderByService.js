import axios from "axios";

export const getOrderByListService = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/order-paper/order-by-list');
        console.log(response.data
            , "여긴 OrderService.js 에요 ");
        return response.data;
    } catch (error) {
        throw new Error('Your Team is Not found');
    }
}