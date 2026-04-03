# React Portfolio + MongoDB

This project provides a portfolio website where each section is its own React component and all section data is fetched from a MongoDB-backed API running on localhost.

## Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express + Mongoose
- **Database:** MongoDB (`mongodb://127.0.0.1:27017/portfolio_db`)

## Project Structure
- `client/` React application
- `server/` Express API and MongoDB schema/seed scripts

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env values:
   ```bash
   cp server/.env.example server/.env
   ```
3. Make sure MongoDB is running on localhost.
4. Seed your data:
   ```bash
   npm run seed --workspace server
   ```
5. Start frontend + backend together:
   ```bash
   npm run dev
   ```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api/portfolio`

## Notes
You can edit `server/seedData.js` and reseed to update portfolio sections.
