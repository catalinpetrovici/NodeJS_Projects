const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
);
