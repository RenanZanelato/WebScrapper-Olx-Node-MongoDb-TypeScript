import { IOlxDocument } from "../database/olx/olx.types";
import { OlxModel } from "../models/olx.model";
import { connect, disconnect } from "./../database/database";
import { OlxModel as DocumentModule } from "./../database/olx/olx.model";
import { olxModelToObj } from "./../helper/functions.utils";

export class OlxRepository 
{
    constructor()
    {
        connect();
    }

    async findOne(olxModel : OlxModel) : Promise<IOlxDocument | null>
    {
       return await DocumentModule.findOne({ olxId: olxModel.getId })    
    }

    async insertOne(olxModel : OlxModel) : Promise<void>
    {
        await DocumentModule.create(olxModelToObj(olxModel));   
    }

    closeConnection()
    {
        //todo: i know it's a bad idea to start and close the connection using the repository.
        //so, in the future i will change this.
        //maybe create a dispose method, and close when the application finishes. 
        disconnect();
    }
}