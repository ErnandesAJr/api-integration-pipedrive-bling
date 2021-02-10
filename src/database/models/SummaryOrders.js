import mongoose from 'mongoose';

const summaryOrdersSchema = new mongoose.Schema({
  totalSale: {
    type: Number,
    required: true
  },
  solicitations: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  },
},
{
  timestamps: true,
});

const SummaryOrders = mongoose.model('summaryOrders', summaryOrdersSchema);
export default SummaryOrders;