const path = require('node:path');
const { createThumbnail } = require('./create-thumbnail');

const source = path.resolve(__dirname, './images/crop_178.jpg');
const name = path.basename(source);
createThumbnail(source, name);
