let lunr = require('lunr');

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

    let flag = false;

    idx.search(name).forEach(e => {
        if(e.score>=0){
            flag = true;
            return;
        }    
    })

    return flag;
}

console.log(filterSong("chờ ai ai c"));