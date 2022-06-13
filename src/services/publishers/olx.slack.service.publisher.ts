import axios from 'axios';
import { IPublisher } from "../../interfaces/publisher.interface";
import { OlxModel } from "../../models/olx.model";
import { slackWebhook } from "../../configs/config.json";

export class SlackPublisher implements IPublisher<OlxModel>
{
    constructor()
    {
    }

    async sendMessages(message: OlxModel) {
      if(slackWebhook.length <= 0){
        console.log("Slack not configured");
        return;
      }
        await axios.post(slackWebhook, {
          text: message.toString()
        })
    }
}