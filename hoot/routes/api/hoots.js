import express from 'express';
import { index, create } from '../../controllers/api/hoots.js';
import ensureLoggedIn from '../../config/ensureLoggedIn.js';

const router = express.Router();

// Protect all routes with ensureLoggedIn
router.use(ensureLoggedIn);

// GET all hoots
router.get('/', index);

// POST create a new hoot
router.post('/', create);

export default router;
