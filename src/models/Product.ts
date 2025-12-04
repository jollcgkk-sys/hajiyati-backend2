import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  nameKey: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  category: string;
  subCategory?: string;
  thirdLevelCategory?: string;
  shipping?: string;
  stock: number;
  condition?: 'new' | 'used';
  sellerId?: string;
  sellerEmail?: string;
}

const productSchema = new Schema<IProduct>({
  nameKey: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: Number,
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: String,
  thirdLevelCategory: String,
  shipping: String,
  stock: { type: Number, default: 0 },
  condition: { type: String, enum: ['new', 'used'], default: 'new' },
  sellerId: String,
  sellerEmail: String
}, { timestamps: true });

export const Product = mongoose.model<IProduct>('Product', productSchema);
