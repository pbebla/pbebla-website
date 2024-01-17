const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require("multer");
const image_size = require('image-size');
const cors = require('cors');

var port = normalizePort(process.env.PORT || '5000');
const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };
const app = express();
app.set('port', port);
const upload = multer({
    dest: "/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});
app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());
app.get("/scoreboard", (req, res, next) => { 
 // show the page
    const _retfile = path.join(__dirname, 'scoreboard.html');
    res.sendFile(_retfile);
});
app.get("/scoreboard.js", (req, res, next) => { 
    // show the page
    const _retfile = path.join(__dirname, 'scoreboard.js');
    res.sendFile(_retfile);
});
app.get("/scoreboard.css", (req, res, next) => { 
  // show the page
  const _retfile = path.join(__dirname, 'scoreboard.css');
  res.sendFile(_retfile);
});
app.get("/lottie.js", (req, res, next) => { 
  // show the page
  const _retfile = path.join(__dirname, 'lottie.js');
  res.sendFile(_retfile);
});
app.get('/home.json', (req, res) => {
  const _retfile = path.join(__dirname, 'home.json');
  res.sendFile(_retfile);
});
app.get('/away.json', (req, res) => {
  const _retfile = path.join(__dirname, 'away.json');
  res.sendFile(_retfile);
});
app.post('/homeJSON', (req, res) => {
    var fileName = './home.json';
    updateJSON(fileName, req, res);
});
app.post('/awayJSON', (req, res) => {
    var fileName = './away.json';
    updateJSON(fileName, req, res);
});
app.post('/homePNG', upload.single('homeFile'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./images/homePic.png");
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        var dimensions = image_size(targetPath);
        console.log(dimensions.width + ' ' + dimensions.height);
        res
          .status(200)
          .contentType("application/json")
          .json({"width": dimensions.width, "height": dimensions.height});
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
});
app.post('/awayPNG', upload.single('awayFile'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./images/awayPic.png");
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        var dimensions = image_size(targetPath);
        console.log(dimensions.width + ' ' + dimensions.height);
        res
          .status(200)
          .contentType("application/json")
          .json({"width": dimensions.width, "height": dimensions.height});
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
});
app.get("/homePic.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./images/homePic.png"));
});
app.get("/awayPic.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./images/awayPic.png"));
});
app.listen(port, () => {
    console.log("Server running on port 5000");
});

function updateJSON(fileName, req, res) {
    // read full config file:
    var src = fs.readFileSync(fileName);
    // convert src json text to js object
    var srcObj = JSON.parse(src);
    // convert req json text to js object
    var reqObj = req.body;
    // update the src with the new stuff in the req
    for(var prop in reqObj){
        srcObj[prop] = reqObj[prop];
    }

    // convert the updated src object back to JSON text
    var updatedJson = JSON.stringify(srcObj, null, 4);

    // write the updated src back down to the file system
    fs.writeFile(
        fileName,
        updatedJson,
        function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('updated ' + fileName);
        }
    );

    res.send(updatedJson);
}

module.exports = app;

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}