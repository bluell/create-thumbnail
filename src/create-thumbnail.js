const fs = require('fs');
const path = require('node:path');
const imageThumbnail = require('image-thumbnail');

async function createThumbnail (source, name) {
  try {
    const thumbnail = await imageThumbnail(source);
    console.log(thumbnail);
    writeThumbnail(thumbnail, name);
  }
  catch (err) {
    console.error(err);
  }
}

function writeThumbnail (buffer, name) {
  const thumbnailPath = path.resolve(__dirname, './thumbnails', name);
  // Note: same name will be replaced.
  fs.writeFile(thumbnailPath, buffer, function (err) {
    if (err) {
      console.error(err);
    }
    else {
      console.log('The thumbnail was created!');
    }
  });
}

module.exports = {
  createThumbnail: createThumbnail,
};
