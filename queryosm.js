var http = require('http');

module.exports = function(query, callback) {
  var overpass = 'http://overpass.osm.rambler.ru/cgi/interpreter?';
  var query = 'relation[type=route](54.9063,37.3711,54.9140,37.3998);';

  http.get(overpass + 'data=[out:json];' + query + 'out;',
  	function(rspStream) {
  		var rsp = '';
  		rspStream
  			.on('data', function(ch) {
  				rsp += ch;
  			})
  			.on('end', function() {
  				callback(null, rsp);
  			});
  	}).on('error', callback);
};
