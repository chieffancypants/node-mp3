var fs      = require('fs'),
    lame    = require('lame'),
    Speaker = require('speaker');

var file = __dirname + '/clips/' + (process.argv[2] || 'success') + '.mp3';

fs.createReadStream(file)
  .pipe(new lame.Decoder())
  .on('format', function (format) {
    this.pipe(new Speaker(format));
  });
