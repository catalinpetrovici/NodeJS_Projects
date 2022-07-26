const PORT = process.env.PORT || 5000;

const startServer = async (app, cb) => {
  try {
    await cb(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = startServer;
