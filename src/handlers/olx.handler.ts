import { OlxScrapper } from "../services/olx.scrapper.service";
import { Publisher } from "../services/olx.publisher.service";
import { OlxRepository } from "../repository/olx.repository";
import { IHandler } from "../interfaces/handler.interface";
import { OlxModel } from "../models/olx.model";

export class OlxHandler implements IHandler{
    constructor(private readonly service: OlxScrapper, 
        private readonly publisher : Publisher,
        private readonly repository: OlxRepository)
    {}
    
    async Execute(targetSite: string): Promise<void> 
    {
        var scrappedDataList = await this.service.scrapeData(targetSite);
        console.log("Total scraped data "+ scrappedDataList.length);
        
        if(scrappedDataList.length <= 0){
            return;
        }

        let newsData = 0;

        scrappedDataList.forEach(async (olxModel : OlxModel) => {
            if(await this.repository.findOne(olxModel) == null) {
                return;
            }

            await this.publisher.sendMessages(olxModel);
            await this.repository.insertOne(olxModel);
            newsData++
        })

        if(newsData >= 1) {
            console.log("Total new data inserted "+  newsData);
        } 
        this.repository.closeConnection();
    }
    
    async ExecutePerPage(targetSite: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}