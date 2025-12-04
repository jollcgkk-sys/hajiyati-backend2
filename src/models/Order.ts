import mongoose, { Schema, Document } from 'mongoose';

interface IOrderProduct {
  product: mongoose.Types.ObjectId;
  qty: number;
  price: number;
}

export interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  products: IOrderProduct[];
  total: number;
  shippingAddress: string;
  province: string;
  phone: string;
  shippingNote?: string;
  paymentMethod: 'card' | 'cod';
  orderDate: Date;
}

const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  province: { type: String, required: true },
  phone: { type: String, required: true },
  shippingNote: String,
  paymentMethod: { type: String, enum: ['card', 'cod'], required: true },
  orderDate: { type: Date, default: Date.now }
}, { timestamps: true });

export const Order = mongoose.model<IOrder>('Order', orderSchema);
