import { MessageEmbed, WebhookClient } from "discord.js";
import { IPublisher } from "../../interfaces/publisher.interface";
import { OlxModel } from "../../models/olx.model";
import { discordWebHook } from "../../configs/config.json";
import { botName, avatar } from "../../configs/discordBotConfig.json";

export class DiscordPublisher implements IPublisher<OlxModel>
{
    private readonly _webhookClient: WebhookClient;
    constructor()
    {
        this._webhookClient = new WebhookClient({ url: discordWebHook });
    }

    async sendMessages(message: OlxModel) {
      if(discordWebHook.length <= 0){
        console.log("Discord not configured");
        return;
      }
        
        const messageEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(message.getTitle())
            .setURL(message.getLink())
            .setThumbnail(message.getImgLink())
            .addFields(
              { name: 'Price', value: message.getPrice() },
              { name: 'Locale', value: message.getLocale() },
              { name: 'Created Date', value: message.getCreatedDate() }
            )
            .setImage(message.getImgLink())
            .setTimestamp();
      
        this._webhookClient.send({
          username: botName,
          avatarURL: avatar,
          embeds: [messageEmbed],
        })
    }
}