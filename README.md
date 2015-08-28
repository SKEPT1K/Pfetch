Pfetch
=========

A simple JavaScript module for fetching parameters (and their values) from a URL

Original Author: Anthony 'SKEPT1K' Viola
URL: `https://github.com/SKEPT1K/Pfetch`

## Installation

1. Download the module from github at: `https://github.com/SKEPT1K/Pfetch`
2. Put the module into the directory holding JavaScript.
3. `include` or `require` the module in your code.

## Usage

`fetch(url, regex, encodeComponent)` 

parameters [string] url, [object] regex (optional), [bool] encodeComponent (optional)

```
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
