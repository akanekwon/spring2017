const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname , 'hello.txt'), 'Node 始めました\n',
	function(err){
		if(err) return console.log("ERROR!");
});

