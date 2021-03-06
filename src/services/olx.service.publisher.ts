import { IPublisher } from "../interfaces/publisher.interface";
import { OlxModel } from "../models/olx.model";

export class Publisher implements IPublisher<OlxModel>
{
    constructor(private readonly listServicePublisher: IPublisher<OlxModel>[])
    {
    }

    async sendMessages(message: OlxModel): Promise<void> {
        if(this.listServicePublisher.length <= 0){
            console.log("No one publisher was configured");
            return;
        }

        this.listServicePublisher.map(async (servicePublisher: IPublisher<OlxModel>) => {
           console.log('Publishing '+ servicePublisher.constructor.name + ' '+ message.getId())
           servicePublisher.sendMessages(message);
        })
    }

    
}
