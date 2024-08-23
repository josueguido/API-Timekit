import { Router } from 'express';
import { getBookings, updateBookings } from '../controllers/bookingsController.js';

const router = Router();

router.get('/', getBookings);
router.put('/:id', updateBookings);

export default router;
