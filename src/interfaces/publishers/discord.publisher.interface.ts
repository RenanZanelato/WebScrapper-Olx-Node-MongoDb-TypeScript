import { OlxModel } from "../../models/olx.model";

export interface IDiscordPublisher {
    sendDiscordMessage(olxModel: OlxModel) : void;
}