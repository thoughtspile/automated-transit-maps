var fs = require('fs');

var stopList = [];

fs.readFile('stops.csv', 'utf-8', function(err, data) {
	data.split('\n')
		.filter(function(line) {
			return line.length > 0 && line[0] !== '#';
		})
		.forEach(function(stopName) {
			if (stopList.indexOf(stopName) !== -1)
				stopList.push(stopName);
		});
	
	fs.writeFile('stopNames.csv', stopList.join('\n'), function(err) {
		console.log(err? 'failure': 'success');
	});
});