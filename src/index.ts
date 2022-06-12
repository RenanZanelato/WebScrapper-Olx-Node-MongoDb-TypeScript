import { Scrapper } from "./services/scrapper.service";
import { targetSite } from "./configs/config.json";
import { connect, disconnect } from "./database/database";
import { OlxModel } from "./database/olx/olx.model";
import { olxModelToObj } from "./helper/functions.utils";

async function main() {
    const scraperService = new Scrapper();
    var datas = await scraperService.scrapeOlxData(targetSite);
    
    connect();
    //await OlxModel.create(olxModelToObj(datas[1]));
    var teste = await OlxModel.findOne({ olxId: '1044262557' })
    console.log(teste);

    console.log(' TESTE  ')
    var teste3 = await OlxModel.findOne({ olxId: '10442625573' })
    console.log(teste3);
    disconnect();
}

main();