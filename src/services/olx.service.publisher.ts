import { IPublisher } from "../interfaces/publisher.interface";
import { OlxModel } from "../models/olx.model";
import { DiscordPublisher } from "./publishers/olx.discord.service.publisher";

export class Publisher implements IPublisher<OlxModel>
{
    constructor(private readonly discordPublisher: DiscordPublisher)
    {
    }

    async sendMessages(message: OlxModel): Promise<void> {
        await this.discordPublisher.sendMessages(message);
    }

    
}
