import express from "express";
import cors from "cors";
import appRouter from "./controllers.js";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api", appRouter);

app.get("/", (req, res) => {
  res.json({ running: "server is running ..." });
});

app.listen(port, () => {
  console.log(`server running on PORT: ${port}`);
});
