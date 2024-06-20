const { Bot } = require("grammy");
require("dotenv").config();

// const {
//   mainMenu,
//   trainingMenu,
//   humanResourcesMenu,
//   trainingProductsMenu,
// } = require("./menus");

const { TEST_BOT_TOKEN } = process.env;

const bot = new Bot(TEST_BOT_TOKEN);
bot.command("start", async (ctx) => {
  await ctx.reply("Click the button below to open Skybot! 👇", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Web App",
            web_app: { url: "https://skybot-opal.vercel.app" },
          },
        ],
      ],
    },
  });
});

bot.start();
console.log("Bot started");
