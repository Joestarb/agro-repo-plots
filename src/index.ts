// src/index.ts
import express from "express";
import parcelaRoutes from "./routes/parcela.routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use("/parcelas", parcelaRoutes);

  app.listen(3000, () => console.log("Parcelas service running on port 3000"));
});
