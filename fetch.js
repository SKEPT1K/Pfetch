/**
 * Author: Anthony Viola
 * Date: 8/27/2015
 */

/**
 * @name fetch
 * @parameters [string] url, [object] regex (optional), [bool] encodeComponent (optional)
 * @returns [array] param_array
 */

fetch = function(url, regex, encodeComponent){
	// Set defaults
	// By default, the most secure setting is enabled (letters only).
	// Method of encoding can be encodeURI if you need any of the following: , / ? : @ & = + $ #
	// or the default encodeURIComponent which encodes everything.
	regex = regex || /([A-Z])+/ig;
	encodeComponent = encodeComponent || true;

	var parameters, parameter, index, param_array;
	url = url.substr(url.indexOf('?')+1)
	parameters = url.split('&');
	param_array = [];
	for (index = 0; index < parameters.length; index++) {
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

/**
 * @name validateParameters
 * @parameters [array] parameter, [object] regex (optional), [bool] encodeComponent (optional)
 * @returns [array] pName and pValue OR [bool] false on fail
 */
validateParameters = function(parameter, regex, encodeComponent) {
    // @TODO: Allow configuration of parameter name and value individually
 	var pName, pValue;
 	if(encodeComponent){
 		parameter[0] = encodeURIComponent(parameter[0]);
 		parameter[1] = encodeURIComponent(parameter[1]);
 	} else {
  		parameter[0] = encodeURI(parameter[0]);
 		parameter[1] = encodeURI(parameter[1]);    		
 	}
 	pName = parameter[0];
 	pValue = parameter[1];
 	if(pName.match(regex) && pValue.match(regex)){
 		return [pName, pValue];
 	} else {
 		return false;
 	}
}
