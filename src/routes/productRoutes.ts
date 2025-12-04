import { Router } from 'express';
import { Product } from '../models/Product';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json(products);
  } catch (err) {
    console.error('Get products error:', err);
    return res.status(500).json({ message: 'Cannot fetch products' });
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    console.error('Create product error:', err);
    return res.status(400).json({ message: 'Cannot create product' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
  } catch (err) {
    console.error('Update product error:', err);
    return res.status(400).json({ message: 'Cannot update product' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.json({ message: 'Deleted' });
  } catch (err) {
    console.error('Delete product error:', err);
    return res.status(400).json({ message: 'Cannot delete product' });
  }
});

export default router;
