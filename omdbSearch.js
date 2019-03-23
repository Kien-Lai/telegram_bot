const fetch = require("node-fetch");

async function omdbSearch(query = '') {
    const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=9699cca`
    const response = await fetch(apiUrl)
    const json = await response.json()
    const posters = (json.Search && json.Search) || []
    return posters.filter(({ Poster }) => Poster && Poster.startsWith('https://')) || []
}

posterMap = (posters) => {
    return posters.map((poster) => ({
        type: 'photo',
        id: poster.imdbID,
        caption: poster.Title,
        description: poster.Title,
        thumb_url: poster.Poster,
        photo_url: poster.Poster
    }))
}

module.exports = {
    omdbSearch,
    posterMap
}