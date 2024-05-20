const { Bot } = require("grammy");
const { Menu } = require("@grammyjs/menu");
require("dotenv").config();

const { TEST_BOT_TOKEN } = process.env;

// Load Menu Options
const skybotMenu = require("./utils/skybot.json");
const trainingMenuButtons = require("./utils/training.json");
const humanResourcesMenuButtons = require("./utils/hr.json");

const bot = new Bot(TEST_BOT_TOKEN);

const selectAnOption = `Select an option below! 👇`;
const startMessage = `Welcome to Skybot!\n\nTo begin, ${selectAnOption}`;
let activeMessage = "";

// Load Menu
const mainMenu = new Menu("root-menu")
  .submenu("Training", "training-menu")
  .submenu("Human Resources", "human-resources-menu");

const tempTrainingMenu = new Menu("temp-training-menu");

const generateTempMenu = (list) => {
  if (list.length < 0) {
    return;
  }

  for (let i = 0; i < list.length; i++) {
    for (let value of list[i].content) {
      const { title, link } = value;
      tempTrainingMenu.text(title).row();
    }
  }

  return tempTrainingMenu;
};

const trainingMenu = new Menu("training-menu")
  .text("Glass", (ctx) => {
    if (activeMessage === "Glass") return;
    activeMessage = "Glass";
    generateMessage(ctx, trainingMenuButtons[0]);
  })
  .row()
  .text("Kratom", (ctx) => {
    if (activeMessage === "Kratom") return;
    activeMessage = "Kratom";
    generateMessage(ctx, trainingMenuButtons[1]);
  })
  .row()
  .text("Hemp", (ctx) => {
    if (activeMessage === "Hemp") return;
    activeMessage = "Hemp";
    generateMessage(ctx, trainingMenuButtons[2]);
  })
  .row()
  .text("Vapes", (ctx) => {
    if (activeMessage === "Vapes") return;
    activeMessage = "Vapes";
    generateMessage(ctx, trainingMenuButtons[3]);
  })
  .row()
  .text("Supplements", (ctx) => {
    if (activeMessage === "Supplements") return;
    activeMessage = "Supplements";
    generateMessage(ctx, trainingMenuButtons[4]);
  })
  .row()
  .text("Hookah & Shisha", (ctx) => {
    if (activeMessage === "Hookah & Shisha") return;
    activeMessage = "Hookah & Shisha";
    generateMessage(ctx, trainingMenuButtons[5]);
  })
  .row()
  .back("Go Back", (ctx) => ctx.editMessageText(startMessage));

const humanResourcesMenu = new Menu("human-resources-menu")
  .text("Benefits", (ctx) => {
    if (activeMessage === "Benefits") return;
    activeMessage = "Benefits";
    const { title, link } = humanResourcesMenuButtons[0];
    ctx.editMessageText(`[*${title}*](${link})`, { parse_mode: "Markdownv2" });
  })
  .row()
  .text("Employee Handbook", (ctx) => {
    if (activeMessage === "Employee Handbook") return;
    activeMessage = "Employee Handbook";
    const { title, link } = humanResourcesMenuButtons[1];
    ctx.editMessageText(`[*${title}*](${link})`, { parse_mode: "Markdownv2" });
  })
  .row()
  .text("Organization Chart", (ctx) => {
    if (activeMessage === "Organization Chart") return;
    activeMessage = "Organization Chart";
    const { title, link } = humanResourcesMenuButtons[2];
    ctx.editMessageText(`[*${title}*](${link})`, { parse_mode: "Markdownv2" });
  })
  .row()
  .text("Hazel History", (ctx) => {
    if (activeMessage === "Hazel History") return;
    activeMessage = "Hazel History";
    const { title, link } = humanResourcesMenuButtons[3];
    ctx.editMessageText(`[*${title}*](${link})\n\n`, {
      parse_mode: "Markdownv2",
    });
  })
  .row()
  .back("Go Back", (ctx) => ctx.editMessageText(startMessage));

/**
 * Generates menu options for the main menu.
 * @param {Object} ctx - The context object.
 * @param {Array} menuButtons - The array of menu buttons.
 * @returns {Promise<void>}
 */

const generateMessage = async (ctx, list) => {
  if (list.length > 0) {
    return;
  }

  let fullMD = `*__${list.title}__*\n`;

  for (let key in list) {
    if (key !== "title") {
      fullMD += `\n*${key}*\n`;
      for (let i = 0; i < list[key].length; i++) {
        const item = list[key][i];
        fullMD += `[*${item.title}*](${item.link})\n`;
      }
    }
  }
  ctx.editMessageText(`${fullMD}`, { parse_mode: "MarkdownV2" });
  return;
};

// mainMenu.register(tempMenu);
mainMenu.register(tempTrainingMenu);

bot.use(mainMenu);

bot.command("start", async (ctx) => {
  generateTempMenu(skybotMenu);
  ctx.reply(startMessage, { reply_markup: tempMenu });
});

bot.start();
console.log("Bot started");
