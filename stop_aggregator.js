var fs = require('fs');

var stopList = [];
var pad0 = function(id) {
	return (id < 10? '0' : '') + id;
}

fs.readFile('stops.csv', 'utf-8', function(err, data) {
	data.split('\n')
		.filter(function(line) {
			return line.length > 0 && line[0] !== '#';
		})
		.forEach(function(stopName) {
			if (stopList.indexOf(stopName) === -1)
				stopList.push(stopName);
		});
	
	var stopStr = stopList.sort().map(function(name, i) {
		return pad0(i) + ', ' + '\"' + name.slice(0, -1) + '\"';
	}).join('\n');
	fs.writeFile('stopNames.csv', stopStr, function(err) {
		console.log(err? 'failure': 'success');
	});
});