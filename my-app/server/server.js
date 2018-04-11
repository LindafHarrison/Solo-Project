const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const fs = require('fs');
const db = require('./pictures');
const pictureController = require('./db/pictureController')

mongoose.connect("mongodb://lindaharrison:password@ds243059.mlab.com:43059/eatingyourwaythroughmanhattan");

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/test", (req, res) => {
  console.log("hit server");
  res.end();
});

app.post('/pictures', pictureController.addPicture, (req, res) => {
  res.end()
});

app.get('/pictures', (req, res) => {
  res.json(db.find());
});


app.listen(process.env.PORT || 8080, console.log("hello"));

// app.use(express.bodyParser({ uploadDir: '/path/to/temporary/directory/to/store/uploaded/files' }));

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', (req, res) => res.send('pong'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.post('/upload', (req, res) => {
//   let tempPath = req.files.file.path,
//     targetPath = path.resolve('./uploads/image.png');
//   if (path.extname(req.files.file.name).toLowerCase() === '.png') {
//     fs.rename(tempPath, targetPath, (err) => {
//       if (err) throw err;
//       console.log('Upload completed!');
//     });
//   } else {
//     fs.unlink(tempPath, () => {
//       if (err) throw err;
//       console.error('Only .png files are allowed!');
//     });
//   }
//   // ...
// });

// app.get('/image.png', function (req, res) {
//   res.sendfile(path.resolve('./uploads/image.png'));
// });