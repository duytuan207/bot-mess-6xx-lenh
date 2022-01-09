const fs = require("fs");
module.exports.config = {
	name: "Thành chỉ box RP",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NQH", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "luatboxRP",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Thánh chỉ")==0 || (event.body.indexOf("Rp luật")==0)) {
		var msg = {
				body: "Tất cả thành viên nhận thánh chỉ",
				attachment: fs.createReadStream(__dirname + `/noprefix/luatboxRP.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}