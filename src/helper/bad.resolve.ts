import { OlxHandler } from "../handlers/olx.handler";
import { OlxRepository } from "../repository/olx.repository";
import { OlxScrapper } from "../services/olx.scrapper.service";
import { Publisher } from "../services/olx.service.publisher";
import { DiscordPublisher } from "../services/publishers/olx.discord.service.publisher";
import { connect } from "./../database/database";

//my custom dependency injection HAHAHA
//TODO: do some thing to auto-magic do the dependency injection

//TODO: i know it's a bad idea to start and close the connection using the repository.
//so, in the future i will change this.
//maybe create a dispose method, and close when the application finishes. 
export function GetHandler() : OlxHandler
{
    connect();
    let service = new OlxScrapper();
    let discordPublisher = new DiscordPublisher();
    let publisher = new Publisher([discordPublisher]);
    let repository = new OlxRepository(); 
    return new OlxHandler(service, publisher, repository);
}