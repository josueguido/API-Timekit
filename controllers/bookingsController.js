// /controllers/bookingsController.js

import { getBookings as fetchBookings, updateBookings as modifyBookings } from '../services/bookings.js';

export const getBookings = async (req, res) => {
  try {
    const bookings = await fetchBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

export const updateBookings = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body; // Puede ser 'cancel' o alguna otra acción

  try {
    const result = await modifyBookings(id, action, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bookings', error });
  }
};
