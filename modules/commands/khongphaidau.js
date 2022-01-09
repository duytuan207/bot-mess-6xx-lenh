 const fs = require("fs");
module.exports.config = {
name: "không phải đâu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyenhuy",
	description: "cre Trang",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat Không phải",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Không phải")==0 || (event.body.indexOf("Đừng")==0)) {
		var msg = {
				body: "Cậu đừng nói như thế ^^",
				attachment: fs.createReadStream(__dirname + `/noprefix/khongphaidau.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

