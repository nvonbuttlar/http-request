var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options, callback) {


https.get(requestOptions, function(response) {

  var total = '';

    response.setEncoding('utf8');

    response.on('data', function(data){
      total += data;
    });

    response.on('end', function() {
      console.log('Ending Request ' + total);
    });


  });
}

getAndPrintHTML(requestOptions);