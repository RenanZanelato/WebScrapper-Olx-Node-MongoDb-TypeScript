export interface IScrapper<TModel> {
    scrapeData(targetLink: string): Promise<TModel[]>;
}