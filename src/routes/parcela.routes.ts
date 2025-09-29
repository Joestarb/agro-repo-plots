// src/routes/parcela.routes.ts
import { Router } from "express";
import { getParcelas, createParcela, updateParcela, deleteParcela } from "../controller/parcela.controller";

const router = Router();

router.get("/", getParcelas);
router.post("/", createParcela);
router.put("/:id", updateParcela);
router.delete("/:id", deleteParcela);

export default router;
