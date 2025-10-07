// src/routes/parcela.routes.ts
import { Router } from "express";
import { getParcelas, createParcela, updateParcela, deleteParcela, getParcelasInactivas } from "../controller/parcela.controller";

const router = Router();

router.get("/", getParcelas);
router.get("/inactivas", getParcelasInactivas);
router.post("/", createParcela);
router.put("/:id", updateParcela);
router.delete("/:id", deleteParcela);

export default router;
