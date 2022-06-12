import { OlxModel } from "../models/olx.model";

export interface IScrapper {
    scrapeOlxData(targetLink: string): Promise<OlxModel[]>;
}