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

const trainingProductsSection = skybotMenu[0].Training[0].Products;
const trainingSecuritySection = skybotMenu[0].Training[1];
const trainingGeneralSection = skybotMenu[0].Training[2];

// console.log(trainingGeneralSection);
// Load Menu
const mainMenu = new Menu("root-menu")
  .submenu("Training", "training-menu")
  .row()
  .submenu("Human Resources", "human-resources-menu");

const trainingMenu = new Menu("training-menu")
  .submenu("Products", "training-products-menu")
  .row()
  .text("Security & Compliance", (ctx) => {
    if (activeMessage === "Security & Compliance") return;
    activeMessage = "Security & Compliance";
    generateMessage(ctx, trainingSecuritySection);
  })
  .row()
  .text("General Training", (ctx) => {
    if (activeMessage === "General Training") return;
    activeMessage = "General Training";
    generateMessage(ctx, trainingGeneralSection);
  })
  .row()
  .back("Go Back");

const trainingProductsMenu = new Menu("training-products-menu")
  .text("Glass", (ctx) => {
    if (activeMessage === trainingProductsSection[0].title) return;
    activeMessage = trainingProductsSection[0].title;
    console.log(trainingProductsSection[0].title);
    generateMessage(ctx, trainingProductsSection[0]);
  })
  .row()
  .text("Kratom", (ctx) => {
    if (activeMessage === "Kratom") return;
    activeMessage = "Kratom";
    generateMessage(ctx, trainingProductsSection[1]);
  })
  .row()
  .text("Hemp", (ctx) => {
    if (activeMessage === "Hemp") return;
    activeMessage = "Hemp";
    generateMessage(ctx, trainingProductsSection[2]);
  })
  .row()
  .text("Vapes", (ctx) => {
    if (activeMessage === "Vapes") return;
    activeMessage = "Vapes";
    generateMessage(ctx, trainingProductsSection[3]);
  })
  .row()
  .text("Supplements", (ctx) => {
    if (activeMessage === "Supplements") return;
    activeMessage = "Supplements";
    generateMessage(ctx, trainingProductsSection[4]);
  })
  .row()
  .text("Hookah & Shisha", (ctx) => {
    if (activeMessage === "Hookah & Shisha") return;
    activeMessage = "Hookah & Shisha";
    generateMessage(ctx, trainingProductsSection[5]);
  })
  .row()
  .back("Go Back");

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

  let fullMD = list.title && `*__${list.title}__*\n\n`;

  for (let key in list) {
    if (key !== "title") {
      fullMD += `*${key}*\n`;
      for (let i = 0; i < list[key].length; i++) {
        fullMD += `*\t[${list[key][i].title}](${list[key][i].link})*\n`;
      }
    }
  }
  ctx.editMessageText(`${fullMD}`, { parse_mode: "MarkdownV2" });
  return;
};

mainMenu.register(trainingMenu);
mainMenu.register(humanResourcesMenu);
mainMenu.register(trainingProductsMenu);

bot.use(mainMenu);

bot.command("start", async (ctx) => {
  ctx.reply(startMessage, { reply_markup: mainMenu });
});

bot.start();
console.log("Bot started");
