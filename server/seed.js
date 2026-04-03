import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Portfolio from './portfolioModel.js';
import seedData from './seedData.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

async function seed() {
  await mongoose.connect(MONGO_URI);
  await Portfolio.deleteMany({});
  await Portfolio.create(seedData);
  console.log('Portfolio data seeded.');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seed failed:', error.message);
  process.exit(1);
});
