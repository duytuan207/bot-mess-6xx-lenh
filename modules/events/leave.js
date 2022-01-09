module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên muda khỏi nhóm";
	const path = join(__dirname, "cache", "leaveMp4");
	const gifPath = join(path, `outbox.mp4`);
	var msg, formPush
	
	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "💞𝘾𝙤𝙣 𝙫𝙤̛̣  {name} đã 𝐛ị 𝙖𝙣𝙝 𝙏𝙪𝙖̂́𝙣 𝙙𝙚̣𝙥 𝙩𝙧𝙤𝙖𝙞 ă𝐧 𝐡ế𝐭 𝐭𝐢ề𝐧 𝙣𝙚̂𝙣 đ𝙖̃ {type} 𝙠𝙝𝙤̉𝙞 𝙣𝙝𝙤́𝙢🐳, 𝙑𝙞̃𝙣𝙝 𝙗𝙞𝙚̣̂𝙩 𝙚𝙢 𝙣𝙝𝙚́ ❤ 𝙠𝙟𝙠𝙟" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
