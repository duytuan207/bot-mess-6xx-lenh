 module.exports.config = {
  name: "donate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "ThΓ΄ng tin admin bot ^^",
  commandCategory: "ad",
  usages: "donate",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/y8XphLFR/z2930463615287-e70f637ab848a28524f3287389bc61bf.jpg",
     ];
     var callback = () => api.sendMessage({body:`ο₯Ία»¦ππ πα» πππππ πππ πΓ πΓπο₯Ί
βα΄α΄Ι΄α΄α΄α΄:
π³α΄Κ: 010052502004
π²Momo: πΆπΏπΆπ»π·π½πΆπΊπΌπ»
----ππ°πΎπα»π· π πΎα»π¬ ππΎπ----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
