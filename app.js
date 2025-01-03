import express from "express";
import axios from "axios";
import cors from "cors";
import path from "path";

import dtv from "dotenv";
dtv.config();

const app = express();
const port = 3001;

app.use(cors());

app.use(express.static(path.join(path.resolve(), "./client/dist")));

app.get("/work", (req, res) => {
  const indexPath = path.join(path.resolve(), "./client/dist", "index.html");
  res.sendFile(indexPath);
});

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get("https://diagonalalaro.com.ar/wp-json/wp/v2/posts?author=23");
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

app.listen(process.env.PORT || port, () => {});
