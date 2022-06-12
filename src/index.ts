import { Scrapper } from "./services/scrapper.service";
import { targetSite } from "./configs/config.json";

async function main() {
    const scraperService = new Scrapper();
    var datas = await scraperService.scrapeOlxData(targetSite);
    
}

main();