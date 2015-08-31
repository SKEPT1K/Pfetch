Pfetch
=========

A simple JavaScript module for fetching parameters (and their values) from a URL

Original Author: Anthony 'SKEPT1K' Viola
URL: `https://github.com/SKEPT1K/Pfetch`

## Installation

1. Download the file from github at: `https://github.com/SKEPT1K/Pfetch`
2. Reference the file via HTML `<script type="text/javascript" src="Pfetch.js" />`

## Usage

`fetch(url, regex, encodeComponent)` 

parameters [string] url, [RegEx object] regex (optional), [bool] encodeComponent (optional)

* URL:  A string including domain and parameters.
* regex: A JavaScript RegEx object.  Used for whitelisting characters.  Useful for clientside validation.
* encodeComponent:  A flag to enforce either encodeURI (false) or encodeURIComponent (true).
   1. encodeURI: encodes special characters except: , / ? : @ & = + $ #
   2. encodeURIComponent: encodes all special characters.

```Javascript
var parameters;
parameters = fetch("http://127.0.0.1:8080/?param1=a&param2=aa&param3=aaa", /([A-Z])+/ig, false);
console.log(parameters);

// Returns [param1: "a", param2: "aa", param3: "aaa"]

console.log(parameters["param1"]);

// "a"
```

## Contributing

Please download, alter, change and tear apart as you see fit.  If you have any issues or comments, please direct them to the author.

## Release History

* 1.0.0 Initial release
* 1.0.1 Hotfix

## Changelog

(1.0.1) - General bugfix and consolidation of the module.
    * Refocused the default regex.
    * Fixed logic errors in for loop.
    * Added more detailed in code commenting.
