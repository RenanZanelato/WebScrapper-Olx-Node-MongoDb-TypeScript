import { IOlxDocument } from "../database/olx/olx.types";
import { OlxModel } from "../models/olx.model";
import { OlxModel as DocumentModule } from "./../database/olx/olx.model";
import { olxModelToObj } from "./../helper/functions.utils";

export class OlxRepository 
{

    async findOne(olxModel : OlxModel) : Promise<IOlxDocument | null>
    {
       return await DocumentModule.findOne({ olxId: olxModel.getId })   
    }

    async insertOne(olxModel : OlxModel) : Promise<void>
    {
        await DocumentModule.create(olxModelToObj(olxModel));   
    }

}