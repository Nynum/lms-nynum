const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const certificateRoutes = require('./routes/certificate.routes');
const progressRoutes = require('./routes/progress.routes');
const enrollmentRoutes = require('./routes/enrollment.routes');
const quizRoutes = require('./routes/quiz.routes');
const lessonRoutes = require('./routes/lesson.routes');
const courseRoutes = require('./routes/course.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('LMS Backend is running!');
});

module.exports = app;

app.use(errorHandler);