# WebScrapper OLX

This is a simple WebScrapper that use Node, MongoDb and TypeScript
Just working on the olx brasil website. (https://www.olx.com.br)

## How to Use

- First, create the file config.json on src/configs/ (or copy the example-config.json and change to config.json)
- DiscordWebook need to be configured (Discord Documentation https://discordjs.guide/popular-topics/webhooks.html#editing-webhooks)
- If you want to use Slack, you will need to configure the webook too (Documentation: https://api.slack.com/messaging/webhooks)

## Installation
```sh
git clone {thisRepositoryLink}
cd {thisRepositoryFolder}
npm install
```

## Scrapping just first Page
```sh
    npx ts-node src/index.ts
```

## Scrapping Per Page
```sh
    npx ts-node src/perPage.ts
```
Total pages will be configured on the file **config.json** in the JsonProperty: **pagesToSearchData**

## Flow
- First will find all data on the page
- Will format the data and populate the model **OLXModel**
- If it's the first time that data was scrapped, will send a message on publisher that was configured and save the OlxModel on MongoDb
- If already exist, will skip for the next.
