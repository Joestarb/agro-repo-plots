import { AppDataSource } from "../data-source";
import { Parcela } from "../entity/Parcela";

const parcelaRepo = AppDataSource.getRepository(Parcela);

export const findAll = async (): Promise<Parcela[]> => {
  return await parcelaRepo.find();
};

export const findById = async (id: number): Promise<Parcela | null> => {
  return await parcelaRepo.findOneBy({ id });
};

export const create = async (data: Partial<Parcela>): Promise<Parcela> => {
  const parcela = parcelaRepo.create(data);
  return await parcelaRepo.save(parcela);
};

export const update = async (id: number, data: Partial<Parcela>): Promise<Parcela | null> => {
  const parcela = await parcelaRepo.findOneBy({ id });
  if (!parcela) return null;
  parcelaRepo.merge(parcela, data);
  return await parcelaRepo.save(parcela);
};

export const remove = async (id: number): Promise<boolean> => {
  const result = await parcelaRepo.delete(id);
  return result.affected !== 0;
};
