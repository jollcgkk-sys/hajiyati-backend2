import { Router } from 'express';
import { Order } from '../models/Order';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (err) {
    console.error('Create order error:', err);
    return res.status(400).json({ message: 'Cannot create order' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    return res.json(orders);
  } catch (err) {
    console.error('Get orders error:', err);
    return res.status(500).json({ message: 'Cannot fetch orders' });
  }
});

export default router;
