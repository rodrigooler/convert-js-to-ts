"use strict"

const exec = require('child_process').exec;

const COMMAND = `find . -type f \( -iname '*.js' -or -iname '*.jsx' \) -not -wholename '*node_modules*' -exec sh -c mv $1 ${1%.js*}.tsx _ {} \;`;

const child = exec(COMMAND, (error, stdout, stderr) => {
	if (stdout) {
		console.info(stdout);
	}
	if (stderr) {
		console.info(stderr);
	}
	if (error !== null) {
		console.error('exec error: ' + error);
	}
});

child;