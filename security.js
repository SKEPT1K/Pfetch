module.exports = function() {
    
     validateParameters: function(parameter, regex, encodeComponent){
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
}