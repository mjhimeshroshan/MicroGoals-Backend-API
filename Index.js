const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// 1. Make sure these imports are correct
const goalRoutes = require('./routes/goalRoutes');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();
const app = express();

// 2. This line is CRITICAL - it allows the server to read JSON bodies
app.use(express.json());

// 3. Connect the routes to specific URL prefixes
app.use('/api/auth', authRoutes);   // This makes the URL: /api/auth/register
app.use('/api/goals', goalRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));