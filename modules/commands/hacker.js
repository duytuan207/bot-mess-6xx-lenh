const fs = require("fs");
module.exports.config = {
    name: "hacker",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huyhoàng - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "Hakcer",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("hack mở")==0 || (event.body.indexOf("hack acc")==0)) {
        var msg = {
                body: "Chơi đéo vui, pay acc 🤡",
                attachment: fs.createReadStream(__dirname + `/noprefix/hacker.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

    }