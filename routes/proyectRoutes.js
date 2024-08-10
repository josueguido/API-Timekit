import express from 'express';
import { updateProjectAvailability } from '../controllers/projectController.js';

const router = express.Router();

router.put('/disponibilidad', updateProjectAvailability);

export default router;
