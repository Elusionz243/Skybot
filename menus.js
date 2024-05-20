const { Menu } = require("@grammyjs/menu");

const { generateMessage } = require("./middleware");

const skybotMenu = require("./utils/skybot.json");

const trainingProductsSection = skybotMenu[0].Training[0].Products;
const trainingSecuritySection = skybotMenu[0].Training[1];
const trainingGeneralSection = skybotMenu[0].Training[2];

const humanResourcesSection = skybotMenu[1]["Human Resources"];

/**
 * Generates a menu for the root section of the application.
 * @param {Object} ctx - The context object.
 * @returns {void}
 */
const mainMenu = new Menu("root-menu")
  .submenu("Training", "training-menu")
  .row()
  .submenu("Human Resources", "human-resources-menu");

/**
 * Generates a menu for the training section of the application.
 * @param {Object} ctx - The context object.
 * @returns {void}
 */
const trainingMenu = new Menu("training-menu")
  .submenu("Products", "training-products-menu")
  .row()
  .text("Security & Compliance", (ctx) => {
    generateMessage(ctx, trainingSecuritySection);
  })
  .row()
  .text("General Training", (ctx) => {
    generateMessage(ctx, trainingGeneralSection);
  })
  .row()
  .back("Go Back");

/**
 * Generates a menu for the Training menu - Products section of the application.
 * @param {Object} ctx - The context object.
 * @returns {void}
 */

const trainingProductsMenu = new Menu("training-products-menu")
  .text("Glass", (ctx) => {
    generateMessage(ctx, trainingProductsSection[0]);
  })
  .row()
  .text("Kratom", (ctx) => {
    generateMessage(ctx, trainingProductsSection[1]);
  })
  .row()
  .text("Hemp", (ctx) => {
    generateMessage(ctx, trainingProductsSection[2]);
  })
  .row()
  .text("Vapes", (ctx) => {
    generateMessage(ctx, trainingProductsSection[3]);
  })
  .row()
  .text("Supplements", (ctx) => {
    generateMessage(ctx, trainingProductsSection[4]);
  })
  .row()
  .text("Hookah & Shisha", (ctx) => {
    generateMessage(ctx, trainingProductsSection[5]);
  })
  .row()
  .back("Go Back", "training-menu");

/**
 * Generates a menu for the human resources section of the application.
 * @param {Object} ctx - The context object.
 * @returns {void}
 */
const humanResourcesMenu = new Menu("human-resources-menu")
  .text("Benefits", (ctx) => {
    generateMessage(ctx, humanResourcesSection[0]);
  })
  .row()
  .text("Employee Handbook", (ctx) => {
    generateMessage(ctx, humanResourcesSection[1]);
  })
  .row()
  .text("Organization Chart", (ctx) => {
    generateMessage(ctx, humanResourcesSection[2]);
  })
  .row()
  .text("Hazel History", (ctx) => {
    generateMessage(ctx, humanResourcesSection[3]);
  })
  .row()
  .back("Go Back", (ctx) => ctx.editMessageText(startMessage));

module.exports = {
  mainMenu,
  trainingMenu,
  trainingProductsMenu,
  humanResourcesMenu,
};
