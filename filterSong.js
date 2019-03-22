const { getInfo } = require('ytdl-getinfo')

module.exports = filterSongFromMessage = async (message) => {
    let songName, isRejectedSong;
    songName = (await getYoutubeTitleFromURL(message)).items[0].title;
    isRejectedSong = compareWithRejectedSong(songName);
    return {isRejectedSong, songName};
}

let compareWithRejectedSong = function(name){
    // let lstRejectedSong = [{
    //     "name": "cnanre",
    //     "text": "chờ ngày anh nhận ra em"
    //   }
    // ]

    // const idx = lunr(function () {
    //     this.ref('name')
    //     this.field('text')
      
    //     lstRejectedSong.forEach(function (doc) {
    //       this.add(doc)
    //     }, this)
    // })

    // let isRejectedSong = false;
    // idx.search(name).forEach(e => {
    //     if(e>=0.5){
    //         isRejectedSong = true;
    //         return;
    //     }    
    // })

    return name.toLowerCase().indexOf("chờ ngày anh nhận ra em") != -1;
}

let getYoutubeTitleFromURL = function(url){
    return getInfo(url);
}