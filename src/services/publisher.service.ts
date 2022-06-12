import { DiscordPublisher } from "./publishers/discord.service.publisher";

export class Publisher
{
    constructor(private readonly discordPublisher: DiscordPublisher)
    {
        
    }
}
