const { Bot } = require("grammy");
const http = require("http");
require("dotenv").config();

const { TEST_BOT_TOKEN } = process.env;

const bot = new Bot(TEST_BOT_TOKEN);

const getDataFromDocs = async () => {
  try {
    const response = await http.get(
      "http://sheets.googleapis.com/v4/1-A8eNdbSzKUQmO-Gva9U4iodO1aoOtk8IcsudAJavok/values/Sheet1!B4"
    );
    const data = response;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

bot.command("start", async (ctx) => {
  const message = ctx.message;
  // bot.api.sendMessage(message.chat.id, "Hello, welcome to the bot! How can I assist you today?");
  const data = await getDataFromDocs();
  console.log(data);
});

bot.start();
console.log("Bot started");
