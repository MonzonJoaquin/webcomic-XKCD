const fstat = require("fs-extra");
const axios = require("axios")

const { writeJson } = fstat

const getImageSize = require("./image-size")

const INITIAL_COMIC = 2500
const LAST_COMIC = 2550

for (let currentComic = INITIAL_COMIC; currentComic < LAST_COMIC; currentComic++) {
    axios(`https://xkcd.com/${currentComic}/info.0.json`).then(response => {
        getImageSize({url: response.data.img}).then(img => {
            writeJson(`./list_comics/${currentComic}.json`, {...response.data, height: img.height, width: img.width}, {spaces:2})
            .then(() => console.log('success'))
            .catch(e => console.log(e))
        })

    })

}