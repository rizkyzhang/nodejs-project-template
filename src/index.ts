import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to starter API",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
