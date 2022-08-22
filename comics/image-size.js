const http = require("https");

const sizeOf = require("image-size");

const getImageSize = ({ url }) => {
  return new Promise((resolve) => {

    http.get(url, (response) => {
      const chunks = [];
      response
        .on("data", (chunk) => {
          chunks.push(chunk);
        })
        .on("end", () => {
          const buffer = Buffer.concat(chunks);
          resolve(sizeOf(buffer));
        });
    });
  });
};


module.exports = getImageSize