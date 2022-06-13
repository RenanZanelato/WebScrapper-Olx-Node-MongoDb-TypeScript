import { OlxScrapper } from "../services/olx.scrapper.service";
import { Publisher } from "../services/olx.service.publisher";
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
            let exist = await this.repository.findOne(olxModel);
            if(exist != null) {
                return;
            }

            //await this.publisher.sendMessages(olxModel);
            //await this.repository.insertOne(olxModel);
            newsData = newsData+1;
        })

        if(newsData >= 1) {
            console.log("Total new data inserted "+  newsData);
        } 
    }
    
    async ExecutePerPage(targetSite: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}