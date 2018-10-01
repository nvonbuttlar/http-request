// Up to this point I have successfully written 2 versions
// of an HTTPS client to retrieve and print HTML data
// from the internet.

// getAndPrintHTML can only work for the URL that has been
// hardcoded. We should change our function to accept one or more parameters
// so when we call it, we can specify what URL we want.

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {
// Make sure to pass requestOptions as an argument when calling the fn
// requestOptions needs global scope


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

// END OF STEP 3

