const fs = require("fs");
module.exports.config = {
name: "Yêu huy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Yêu huy",
	commandCategory: "System",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handlEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu huy")==0 || (event.body.indexOf("yêu huy")==0)) {
		var msg = {
				body: "Yêu Duy nhất :3 \nYêu vlon luôn❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/cak.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}