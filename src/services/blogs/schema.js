import mongoose from 'mongoose';

// {
//   "category": "new article",
//   "title": "BLOG 10",
//   "cover":"something else",
//   "readTime": {
//     "value": 1,
//     "unit": "minute"
//   },
//   "author": {
//     "name": "new author",
//     "avatar":"something different"
//   },
//     "content": "HTML"
// }

const { Schema, model } = mongoose;

const BlogSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    readTime: {
      value: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model('Blog', BlogSchema);
