module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100041161539665"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Bớt Tag Admin Bố?","Sao ?? Làm ơn Đừng Tag Bố Cho Bố Khoẻ!!","Sao gọi Tao có gì không em?"," admin có lời nhắn muốn gửi đến bạn: Đjt mẹ mày tag cái lồz ngủ cũng đéo yên","Hãy dùng lệnh /ad để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm ngay","Tag làm gì ? Anh Tuấn khum có đây đâu :p","Sao? Tag có việc gì? Gấp thì ib riêng ngay!","Đúng rồi, anh Tuấn đẹp trai lắm","Thích tag ko :)","Tag anh Tuấn đẹp zai làm chi dậy?","Dạo này anh Tuấn Đz s1tg hơi bận, thông cảm ~!","Cần cái giề, có Bot đây được hong :>","Hiện tại ông chủ của tôi đang bận, có gì hot ?","Tag cái gì Admin bận rồi","Tag admin làm gì, nó không có đây đâu!","Tag nữa t dỗi cho","Có db thằng Admin rep","Nó ngủ rồi đừng tag nữa!","Hãy dùng callad để liên hệ với adminh https://www.facebook.com/100041161539665 link face admin >,<"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }