const PORT = process.env.PORT || 5000;
require(`dotenv`).config();
const connectDB = require(`./db/connect`);
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.static(`./public`));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
