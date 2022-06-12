import { IOlxDocument, IOlxModel } from "./olx.types";

export async function findOne(
  olxId: string
): Promise<IOlxDocument> {
  return await this.findOne({ olxId });
}
export async function findByAge(
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}