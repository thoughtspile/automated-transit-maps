var osmapi = require('./queryosm.js');
var fs = require('fs');

var exportPath = __dirname + '\\stops.json';
osmapi(
	'relation[type=route](54.9063,37.3711,54.9140,37.3998);',
	function(err, data) {
		fs.writeFile(exportPath, data, function() {});
	}
);
