import { Router } from 'express';
import { Review } from '../models/Review';

const router = Router();

router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
    return res.json(reviews);
  } catch (err) {
    console.error('Get reviews error:', err);
    return res.status(500).json({ message: 'Cannot fetch reviews' });
  }
});

router.post('/', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json(review);
  } catch (err) {
    console.error('Create review error:', err);
    return res.status(400).json({ message: 'Cannot add review' });
  }
});

export default router;
