import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
const PORT = process.env.PORT || 8000;

//use middlewares
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// connect to db

app.get("/", (req, res) => {
  res.json({
    message: "You reaced e commerce api",
  });
});

app.use((error, req, res) => {
  console.log(error.message);
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
