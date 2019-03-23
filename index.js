const Telegraf = require('telegraf')
const fetch = require('node-fetch')
const filterSongFromMessage = require('./filterSong');
const autoReply = require('./autoReply');
const { omdbSearch, posterMap } = require('./omdbSearch');
const getWeatherInfo = require('./getWeatherInfo');
let currentState = {
    timesUserSendMessage: 0
}

const bot = new Telegraf('775689550:AAE7sebHJpi4ZSONvZdIhwdPUNL7JBN589c')

// bot.on('text', async (ctx) => {
//     let message = ctx.message.text;
//     let id = ctx.message.from.id;
//     let username = ctx.message.from.username;
//     let isRejectedSong =false;
//     let songName="";

//     //lọc bài hát
//     filterSong: try {
//         if (message.indexOf('https') == -1) break filterSong; 
//         let cookedData = await filterSongFromMessage(message);
//         isRejectedSong = cookedData.isRejectedSong;
//         songName = cookedData.songName;
//         if(isRejectedSong){
//             return ctx.reply(`Vote reject ${songName} +1 :))`);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }

//     //auto reply
//     try {
//         if(username == "trang_dnp"){
//             let message = autoReply(currentState);
//             return ctx.reply(message);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }

//     //end game
//     return;
// })

bot.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    try {
        const posters = await omdbSearch(inlineQuery.query)
        const results = posterMap(posters);
        return answerInlineQuery(results);
    } catch (error) {
        console.log(error.message);
    }
    return;
})

bot.command('weather', async (ctx) => {
    try {
        let { temp, humidity, clouds } = await getWeatherInfo();
        return ctx.reply(`location:Ha Noi\ntemp:${temp}\nhumidity:${humidity}%\nclounds:${clouds}`);
    } catch (error) {
        console.log(error.message);
    }
    return;
})

bot.command('help', async (ctx) => {
    return ctx.reply(`1.@youtube tên_video  (danh sách tìm kiếm trên youtube)
    2./weather (lấy thông tin thời tiết hiện tại)
    3./help (trợ giúp)
    4.1.@MYGOVTMOVE_Bot tên_phim  (tìm kiếm phim theo tên)
    `)
})

bot.command('save', async (ctx) => {
    let query = ctx.message.text;
    let cookedQuery = query.match('/^\s+|\s\s+|\s+$/g');
    let [command, variableName, variableValue] = query.split
})

bot.launch();


