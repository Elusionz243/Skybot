const { Bot } = require("grammy");
const { Menu } = require("@grammyjs/menu");
require("dotenv").config();

const { TEST_BOT_TOKEN } = process.env;

// Load Menu Options
const trainingMenuButtons = require("./utils/training.json");
const humanResourcesMenuButtons = require("./utils/hr.json");

const bot = new Bot(TEST_BOT_TOKEN);

// Load Menu
const mainMenu = new Menu("root-menu")
  .submenu("Training", "training-menu")
  .submenu("Human Resources", "human-resources-menu");

const trainingMenu = new Menu("training-menu")
  .submenu("Glass", "glass-menu")
  .row()
  .submenu("Kratom", "kratom-menu")
  .row()
  .submenu("Hemp", "hemp-menu")
  .row()
  .submenu("Vapes", "vapes-menu")
  .row()
  .submenu("Supplements", "supplements-menu")
  .row()
  .submenu("Hookah & Shisha", "hookah-menu")
  .row()
  .back("Go Back");

const humanResourcesMenu = new Menu("human-resources-menu")
  .text("Benefits", (ctx) => ctx.reply("www.Dontclickme.com"))
  .row()
  .text("Employee Handbook", (ctx) => ctx.reply("www.Dontclickme.com/2"))
  .row()
  .text("Organization Chart", (ctx) => ctx.reply("www.Dontclickme.com/3"))
  .row()
  .text("Hazel History", (ctx) => ctx.reply("www.Dontclickme.com/4"))
  .row()
  .back("Go Back");
/**
 * Generates menu options for the main menu.
 * @param {Object} ctx - The context object.
 * @param {Array} menuButtons - The array of menu buttons.
 * @returns {Promise<void>}
 */

const generateSubMenu = (menuButtons) => {
  // Iterate over the menu buttons and add them to the main menu
  for (let i = 0; i < menuButtons.length; i++) {
    const category = menuButtons[i];

    // Add a new menu option for the category title
    mainMenu.text(category.title, (ctx) => ctx.reply(category.title)).row();
  }

};

mainMenu.register(trainingMenu);
mainMenu.register(humanResourcesMenu);

bot.use(mainMenu);

bot.command("start", (ctx) =>
  ctx.reply("Select an option from below 👇", { reply_markup: mainMenu })
);

bot.start();
console.log("Bot started");
