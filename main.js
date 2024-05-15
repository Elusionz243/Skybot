const { Api, Bot, Keyboard, InlineKeyboard } = require("grammy");
// const http = require("http");
require("dotenv").config();
// const xmlRequest = new XMLHttpRequest();

const { TEST_BOT_TOKEN } = process.env;

const bot = new Bot(TEST_BOT_TOKEN);
const listOfCommands = [
  ["/training", "Training"],
  ["/humanResources", "Human Resources"],
];

const listOfButtons = {
  Glass: {
    "Water Pipes": [
      "Most Common Water Pipe Types (future HSO blog post)",
      "Oil burners",
    ],
    "Water Pipe Accessories": [
      "Bangers",
      "Percolators",
      "Downstems",
      "Ash Catchers",
    ],
    "Dry Pipes": ["Hand Pipes", "Chillums", "Nectar Collectors"],
  },
  Kratom: {
    "General Knowledge": [
      "Common Uses",
      "Medical Benefits",
      "Strain Genetics",
      "Vein Colors",
      "Dosage Guidance",
      "Alkaloids",
      "Common Drug Interaction",
    ],
    "Common Product Types": ["Whole Herb", "Extracts", "Edibles & Drinks"],
  },
  Hemp: {
    "General Knowledge": [
      "2018 Farm Bill",
      "Sativas vs Indicas",
      "Hemp vs Cannabis",
      "Non-Psychoactive Cannabinoids",
      "Psychoactive Cannabinoids",
      "Terpenes",
    ],
    "Common Product Types": [
      "Flower",
      "Cartridges",
      "Edibles",
      "Concentrates",
      "Disposables",
    ],
    FADE: [],
  },
  Vapes: {
    "Disposable Vapes": ["Lost Mary", "Elf Bar", "Geek Bar", "Raz (TN9000)"],
    "Reuseable Vapes": [
      "Mods & Kits",
      "Pods, Tanks, & Coils",
      "Batteries",
      "Troubleshooting Tips",
    ],
  },
  Supplements: {
    "Detox Products": [],
    "Inositol & Lactose": [],
  },
  "Hookah & Shisha": {
    "Hookah Lore": [],
    "Hookah Maintenence": [],
    Shisha: [],
  },
};

const generateKeyboard = async (ctx, categories) => {
  const keyboard = new Keyboard();
  for (const category of categories) {
    keyboard.text(category);
  }
  ctx.reply("Please select a category ⬇️", {
    reply_markup: keyboard,
  });
};

const startKeyboard = new InlineKeyboard()
  .text("Training")
  .text("Human Resources");

const menuOptions = (ctx) => {
  ctx.reply("Please select an option to begin ⬇️", {
    reply_markup: startKeyboard,
  });
};

bot.command("start", (ctx) => menuOptions(ctx));
bot.command("training", (ctx) => generateKeyboard(ctx, listOfButtons));

bot.start();
console.log("Bot started");
