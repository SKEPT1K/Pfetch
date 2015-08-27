/**
 * Author: Anthony Viola
 * Date: 8/27/2015
 */

module.exports = function() {

	validateParameters = require('validateParameters.js');


    fetch: function(url, regex, encodeComponent){
    	// Set defaults
    	// By default, the most secure setting is enabled (letters only).
    	// Method of encoding can be encodeURI if you need any of the following: , / ? : @ & = + $ #
    	// or the default encodeURIComponent which encodes everything.
    	regex = regex || "([A-Z])\\w+";
    	encodeComponent = encodeComponent || true;

    	var parameters, parameter, index, param_array;
    	parameters = url.split('&');
    	param_array = [];

    	for (index = 0; index >= parameters.length; index++) {
    		if(parameters[index]){
    			parameter = parameters[index].split('=');
    			scrubbedParams = validateParameters(parameter, regex, encodeComponent);
    			if(scrubbedParams !== false){
    				// Evaluates to param_array["Parameter_Name"] = "Parameter_value"
    				param_array[scrubbedParams[0]] = scrubbedParams[1];
    			}
    		}
    	};

    	return param_array
    }
}