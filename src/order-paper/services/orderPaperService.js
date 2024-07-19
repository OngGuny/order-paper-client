import axios from 'axios';

export const saveOrderPaper = async (orderMap, place, absentList) => {
  const orderPaper = {
    orderMap: {},
    place: '',
    absentList: []
  }

  try {
    const response = await axios.post('/save-order-paper', orderPaper, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      console.log('Order Paper is saved well. saved orders: ', response.data)
    }

  } catch (error) {
    //에러처리
    throw new Error('Failed to save your order-paper');
  }
}


