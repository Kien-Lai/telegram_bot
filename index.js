const Telegraf = require('telegraf')
const getYoutubeTitle = require('get-youtube-title')
const lunr = require("lunr");

const bot = new Telegraf('775689550:AAE7sebHJpi4ZSONvZdIhwdPUNL7JBN589c')
bot.on('text', async (ctx) => {
    let message = ctx.message.text;
    let id = ctx.message.from.id;

    //lọc bài hát
    let songName = await getYoutubeTitleFromId(message);
    let isRejectedSong = filterSong(songName);

    //reply
    // return ctx.reply(`${ctx.message.from.username}: trang im di`);
    if(isRejectedSong){
        ctx.reply(`Vote reject ${songName} +1 :))`);
    }
})

bot.launch();

let filterSong = function(name){
    let lstRejectedSong = [{
        "name": "cnanre",
        "text": "chờ ngày anh nhận ra em"
      }
    ]

    const idx = lunr(function () {
        this.ref('name')
        this.field('text')
      
        lstRejectedSong.forEach(function (doc) {
          this.add(doc)
        }, this)
    })

    idx.search(name).forEach(e => {
        if(e>=0.5) return true;    
    })
}

let getYoutubeTitleFromId = function(url){
    let startAt = url.indexOf("v=");
    let youtubeId = url.substring(startAt+2);
    //  getYoutubeTitle("asdfasfsd");
}
  