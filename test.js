const { getInfo } = require('ytdl-getinfo')

getInfo('shorturl.at/gGOWY').then(info => {
  // info.items[0] should contain the output of youtube-dl --dump-json
  console.log(info.items[0].title)
})
