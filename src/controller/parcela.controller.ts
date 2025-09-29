import { Request, Response } from "express";
import * as parcelaService from "../service/parcela.service";

// Obtener todas las parcelas
export const getParcelas = async (_req: Request, res: Response) => {
  try {
    const parcelas = await parcelaService.findAll();
    res.json(parcelas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener parcelas", error });
  }
};

// Obtener una parcela por ID
export const getParcelaById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const parcela = await parcelaService.findById(id);
    if (!parcela) return res.status(404).json({ message: "Parcela no encontrada" });
    res.json(parcela);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener parcela", error });
  }
};

// Crear una nueva parcela
export const createParcela = async (req: Request, res: Response) => {
  try {
    const nuevaParcela = await parcelaService.create(req.body);
    res.status(201).json(nuevaParcela);
  } catch (error) {
    res.status(500).json({ message: "Error al crear parcela", error });
  }
};

// Actualizar una parcela existente
export const updateParcela = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const actualizada = await parcelaService.update(id, req.body);
    if (!actualizada) return res.status(404).json({ message: "Parcela no encontrada" });
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar parcela", error });
  }
};

// Eliminar una parcela
export const deleteParcela = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const eliminada = await parcelaService.remove(id);
    if (!eliminada) return res.status(404).json({ message: "Parcela no encontrada" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar parcela", error });
  }
};
