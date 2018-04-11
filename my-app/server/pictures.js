'use strict';
const fs = require('fs');
let picList;
let writeLocation;
let file;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/pictures.test.json`;
  picList = require(writeLocation);
} else {
  writeLocation = `${__dirname}/pictures.dev.json`;
  picList = require(writeLocation);
}

const db = {};

db.create = (pic) => {
  const newPic = Object.assign(pic, {
    id: picList.length,
    createdAt: new Date().toISOString(),
  });
  picList.push(newPic);
  fs.writeFileSync(writeLocation, picList);
  return picList.slice(-1)[0];
};

db.find = () => picList;

db.drop = () => {
  picList = [];
  fs.writeFileSync(writeLocation, picList);
  return true;
};

db.reset = () => {
  picList = JSON.parse(fs.readFileSync(writeLocation));
};
