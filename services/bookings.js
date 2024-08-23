import fetch from 'node-fetch';
import { TIMEKIT_API_KEY } from '../config.js';


export const getBookings = async () => {
  const response = await fetch('https://api.timekit.io/v2/bookings', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${TIMEKIT_API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

export const updateBookings = async (id, action, data) => {
  const response = await fetch(`https://api.timekit.io/v2/bookings/${id}/${action}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Basic ${TIMEKIT_API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
};

