var https = require('https');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function(response) {

  var total = '';

    response.setEncoding('utf8');

    response.on('data', function(data){
      total += data;
    });

    response.on('end', function() {
      console.log('Ending Data ' + total);
    });


  });
}

getAndPrintHTML();

// END OF STEP 2
