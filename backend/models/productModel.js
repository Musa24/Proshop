import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    name: {
      type: Sting,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: Sting,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    //TIMESTAMP
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
