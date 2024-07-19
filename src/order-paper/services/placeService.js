import axios from "axios";

export const getVisitedPlaceList = async () => {
  try {
    const response = await axios.get('/visited-place');
    return response.data
  } catch (error) {
    throw new Error('Failed to load visitedPlaceList');
  }
}

