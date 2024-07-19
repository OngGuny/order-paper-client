import axios from "axios";
import api from "../api/Api";

export const getOrderedByListService = (cancelToken) => {
  return api.get('/order-by-list', {
    cancelToken
  }).catch(error => {
    if (axios.isCancel(error)) {
      return Promise.reject(new Error("Request was canceled"));
    } else {
      return Promise.reject(new Error("Your Team was Cleaned-Up.."))
    }
  })
}

const OrderByService = {
  getOrderedByListService,
}

export default OrderByService;