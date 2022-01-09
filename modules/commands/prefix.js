module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "prefix.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/247098280_4521159694641191_4980423377547870476_n.mp4/video-1636723438.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=9pXiOjcgZO4AX_82pJh&vabr=575782&_nc_ht=video.xx&oh=09b4f010d178be0c1cec5d60532fc9d1&oe=618F8BA7&dl=1").pipe(fs.createWriteStream(dirMaterial + "prefix.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `🥳Bất ngờ chưa ${name} đây là dấu lệnh của bot này : _\n🌺Nếu bạn cần giúp đỡ về lệnh hãy dùng _help + lệnh để xem cách dùng✅`,
                attachment: fs.createReadStream(__dirname + `/noprefix/prefix.mp4`)
            }
    if (event.body.toLowerCase() == "lệnh đâu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "dùng sao"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chỉ dùng với"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lệnh là gì"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "prefix"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
