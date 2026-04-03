import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Portfolio from './portfolioModel.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

app.get('/api/portfolio', async (_req, res) => {
  const content = await Portfolio.findOne();
  if (!content) {
    return res.status(404).json({ message: 'Portfolio data not found. Run npm run seed --workspace server' });
  }
  res.json(content);
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Could not start server:', error.message);
    process.exit(1);
  }
}

startServer();
