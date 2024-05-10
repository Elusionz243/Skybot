const { Bot } = require("grammy");
require("dotenv").config();

const { TEST_BOT_TOKEN } = process.env;

console.log(TEST_BOT_TOKEN);
const bot = new Bot(TEST_BOT_TOKEN);

const getDataFromDocs = async () => {
  try {
    const response = await fetch(
      "https://docs.googleapis.com/v1/documents/1-A8eNdbSzKUQmO-Gva9U4iodO1aoOtk8IcsudAJavok"
    );
    const data = await response.json();
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
