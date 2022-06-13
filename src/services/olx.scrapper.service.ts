import { OlxModel } from "../models/olx.model";
import axios from 'axios';
import cheerio from 'cheerio';
import { IScrapper } from "../interfaces/scrapper.interface";

export class OlxScrapper implements IScrapper<OlxModel>
{
  public async scrapeData(targetLink: string): Promise<OlxModel[]>
  {
    let rawHtmlData = await this.getRawData(targetLink);
    return await this.formatRawData(rawHtmlData);
  } 

  private async getRawData(targetLink: string): Promise<string>
  {
    let response = await axios.get(targetLink);
    return response.data;
  }

  private async formatRawData(rawHtmlData: string): Promise<OlxModel[]>
  {
    let $ = cheerio.load(rawHtmlData);
    const targetTable = $('.sc-1fcmfeb-2');
    let olxModelList: OlxModel[] = [];

    targetTable.map(async (i:number, actual: cheerio.Element) => 
    {
      let dataId = $(actual).find('a').attr('data-lurker_list_id');
      let dataCreatedDate = $(actual).find('.sc-11h4wdr-0').text();

      let olxModel = new OlxModel(dataId, dataCreatedDate )
      .setPrice($(actual).find('.sc-1kn4z61-1 span').text())
      .setTitle( $(actual).find('a').attr('title'))
      .setLink($(actual).find('a').attr('href'))
      .setImgLink($(actual).find('img').attr('data-src'))
      .setLocale($(actual).find('.sc-1c3ysll-0 span').text());
 
      if (olxModel.getLink() === '???'){
        return;	
      }
    
      olxModelList.push(olxModel);
    });

    return olxModelList;
  }
}