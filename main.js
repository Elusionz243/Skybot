const { Bot } = require("grammy");
require("dotenv").config();

const {
  mainMenu,
  trainingMenu,
  humanResourcesMenu,
  trainingProductsMenu,
} = require("./menus");

const { TEST_BOT_TOKEN } = process.env;

const bot = new Bot(TEST_BOT_TOKEN);

const selectAnOption = `Select an option below! 👇`;
const startMessage = `Welcome to Skybot!\n\nTo begin, ${selectAnOption}`;

mainMenu.register(trainingMenu);
mainMenu.register(humanResourcesMenu);
mainMenu.register(trainingProductsMenu);

bot.use(mainMenu);

bot.command("start", async (ctx) => {
  ctx.reply(startMessage, { reply_markup: mainMenu });
});

bot.start();
console.log("Bot started");
