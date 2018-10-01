// THIS IS A MODULE

module.exports = function getHTML (options, callback) {

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
};