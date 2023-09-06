import axios from "axios";

export const getVisitedPlaceList = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/order-paper/visited-place');
        return response.data
    } catch (error) {
        throw new Error('Failed to load visitedPlaceList');
    }
}

