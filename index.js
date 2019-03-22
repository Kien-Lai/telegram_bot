const Telegraf = require('telegraf')
const filterSongFromMessage = require('./filterSong');
const autoReply = require('./autoReply');
let currentState = {
    timesUserSendMessage: 0
}

const bot = new Telegraf('775689550:AAE7sebHJpi4ZSONvZdIhwdPUNL7JBN589c')

bot.on('text', async (ctx) => {
    let message = ctx.message.text;
    let id = ctx.message.from.id;
    let username = ctx.message.from.username;
    let isRejectedSong =false;
    let songName="";

    //lọc bài hát
    filterSong: try {
        if (message.indexOf('https') == -1) break filterSong; 
        let cookedData = await filterSongFromMessage(message);
        isRejectedSong = cookedData.isRejectedSong;
        songName = cookedData.songName;
        if(isRejectedSong){
            return ctx.reply(`Vote reject ${songName} +1 :))`);
        }
    } catch (error) {
        console.log(error.message);
    }

    //auto reply
    try {
        if(username == 'Trang VTP'){
            let message = autoReply(currentState);
            return ctx.reply(message);
        }
    } catch (error) {
        console.log(error.message);
    }

    //end game
    return;
})


bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    // const posters = await omdbSearch(inlineQuery.query)
    // const results = posters.map((poster) => ({
    //     type: 'photo',
    //     id: poster.imdbID,
    //     caption: poster.Title,
    //     description: poster.Title,
    //     thumb_url: poster.Poster,
    //     photo_url: poster.Poster
    // }))
    return answerInlineQuery('results')
})

bot.launch();


  