import mongoose from "mongoose";

const HireRequestSchema = new mongoose.Schema({
  sp_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
    required: true,
  },
  state: {
    type: String,
    enum: ['pending', 'Accepted', 'rejected'],
    required: true,
  },
});

const HireRequest = mongoose.models.HireRequest || mongoose.model('HireRequest', HireRequestSchema);
export default HireRequest;

