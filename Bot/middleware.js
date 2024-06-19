let activeMessage = "";

/**
 * Generates a formatted message for a list of items.
 *
 * @param {object} ctx - The context object for the current request.
 * @param {object} list - The list of items to generate the message for.
 * @returns {Promise<void>} - Resolves when the message has been sent.
 */ 
const generateMessage = async (ctx, list) => {
  if (list.length > 0 || list.title === activeMessage) {
    return;
  }
  activeMessage = list.title;

  let fullMD = list.title
    ? `*__${list.title}__*\n`
    : `*__${Object.keys(list)[0]}__*\n`;

  for (const key in list) {
    if (key !== "title") {
      if (list.title) fullMD += `\n*${key}*\n`;
      for (let i = 0; i < list[key].length; i++) {
        const { title, link } = list[key][i];
        fullMD += `[*${title}*](${link})\n`;
      }
    }
  }
  ctx.editMessageText(`${fullMD}`, { parse_mode: "MarkdownV2" });
  return;
};

module.exports = { activeMessage, generateMessage };