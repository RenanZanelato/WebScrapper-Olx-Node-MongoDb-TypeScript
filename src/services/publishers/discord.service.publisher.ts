import { MessageEmbed, WebhookClient } from "discord.js";
import { IDiscordPublisher } from "../../interfaces/publishers/discord.publisher.interface";
import { OlxModel } from "../../models/olx.model";
import { discordWebHook } from "./../../configs/config.json";
import { botName, avatar } from "./../../configs/discordBotConfig.json";

export class DiscordPublisher implements IDiscordPublisher
{
    private readonly _webhookClient: WebhookClient;
    constructor()
    {
        this._webhookClient = new WebhookClient({ url: discordWebHook });
    }
    async sendDiscordMessage(olxModel: OlxModel) {
        
        const messageEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(olxModel.getTitle())
            .setURL(olxModel.getLink())
            .setThumbnail(olxModel.getImgLink())
            .addFields(
              { name: 'Price', value: olxModel.getPrice() },
              { name: 'Locale', value: olxModel.getLocale() },
              { name: 'Created Date', value: olxModel.getCreatedDate() }
            )
            .setImage(olxModel.getImgLink())
            .setTimestamp();
      
        this._webhookClient.send({
          username: botName,
          avatarURL: avatar,
          embeds: [messageEmbed],
        })
    }
}