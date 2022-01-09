const fs = require("fs");
module.exports.config = {
	name: "Suy tư",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Để tao suy nghĩ cho",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Haiz")==0 || (event.body.indexOf("Hm")==0)) {
		var msg = {
				body: "Chuyện gì khó, để bot của huy suy nghĩ cho",
				attachment: fs.createReadStream(__dirname + `/noprefix/hmmm.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}