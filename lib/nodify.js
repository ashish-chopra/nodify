/*
 * File: index.js
 * Author: Ashish Chopra 
 * Email: ashish.h.chopra@ericsson.com
 * Date: 12 Mar, 2014
 * ========================================
 * 
 * Nodify module converts a javascript file written for
 * browsers into a node JS environment without modifying 
 * original javascript file.
 * 
 */

var vm = require('vm');
var fs = require('fs');
var util = require('util');


/*
 * converts the javascript specified by a file name
 * into a node compatible javascript & loads it into 
 * an object and returns it.
 */
function convert(filename) {
	var filedata = fs.readFileSync(filename,'utf8');
	var sandbox = {};
	vm.runInNewContext(filedata, sandbox);
	return sandbox;
}

// exported to the module loader
exports.convert = convert;

