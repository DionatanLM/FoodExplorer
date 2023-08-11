require("express-async-errors");
require("dotenv/config");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const uploadConfig = require("./configs/upload");
const cors = require("cors");
const migrationRun = require("./database/sqlite/migrations");

migrationRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
