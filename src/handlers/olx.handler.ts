import { OlxRepository } from "../repository/olx.repository";
import { IHandler } from "../interfaces/handler.interface";
import { OlxModel } from "../models/olx.model";
import { IScrapper } from "../interfaces/scrapper.interface";
import { IPublisher } from "../interfaces/publisher.interface";
import { pagesToSearchData } from "./../configs/config.json";

export class OlxHandler implements IHandler{
    constructor(private readonly service: IScrapper<OlxModel>, 
        private readonly publisher : IPublisher<OlxModel>,
        private readonly repository: OlxRepository)
    {}
    
    async Execute(targetSite: string): Promise<void> 
    {
        console.log("Start scraping from "+ targetSite);
        var scrappedDataList = await this.service.scrapeData(targetSite);
        console.log("Total scraped data "+ scrappedDataList.length);
        
        if(scrappedDataList.length <= 0){
            return;
        }

        scrappedDataList.map(async (olxModel: OlxModel) => {
            let exist = await this.repository.findOne(olxModel);
            if (exist != null) {
                return;
            }

            await this.publisher.sendMessages(olxModel);
            //await this.repository.insertOne(olxModel);
        })
    }
    
    async ExecutePerPage(targetSite: string): Promise<void> {
        for (let i = 1; i <= pagesToSearchData; i++) {
            await this.Execute(targetSite+"?o="+i);
         }
    }

}