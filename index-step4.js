var https = require('https');

function getHTML(options, callback) {

  https.get(options, function(response) {

    var total = '';

    response.setEncoding('utf8');

    response.on('data', function(data){
      total += data;
    });

    response.on('end', function() {
      callback(total);
    });


  });
}

function printHTML(html) {
  console.log(html);

}



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);