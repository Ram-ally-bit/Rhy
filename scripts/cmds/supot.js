module.exports = {
 config: {
 name: "supot",
 version: "1.0",
 author: "Gab Yu",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "supot") {
 return message.reply({
 body: "Supot parang Ikaw",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ZqiohJ3.gif")
 });
 }
 }
}