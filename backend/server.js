const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
const port = process.env.PORT || 5250;
// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


// Test route
app.get('/', (req, res) => {
  res.send('API is Running in Github Actions');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});