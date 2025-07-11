import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { serveSwagger, setupSwagger } from './config/swagger.js'; // ✅ Swagger
import authRoutes from './routes/auth.js';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import courseRoutes from './routes/course.routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// ✅ Swagger docs route
app.use('/docs', serveSwagger, setupSwagger);

// ✅ Register routes
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📚 Swagger Docs: http://localhost:${PORT}/docs`);
});
