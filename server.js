import express, { json } from 'express';
import cors from 'cors';
import userRouter from './app/routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import positionRouter from './app/routes/positionRoutes.js';
import attendanceRouter from './app/routes/attendanceRoutes.js';
import adminRouter from './app/routes/adminRoutes.js';
import './app/cron/schedulingCreateAttendance.js';
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(json());
app.use(cookieParser());
app.set('trust proxy', 1);

app.use('/api/v1', userRouter);
app.use('/api/v1', positionRouter);
app.use('/api/v1', attendanceRouter);
app.use('/api/v1', adminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  const now = new Date().toLocaleString();
  console.log(`🚀 Server running on port ${PORT} at ${now}`);
});
