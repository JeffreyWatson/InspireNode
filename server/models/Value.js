import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ValueSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
