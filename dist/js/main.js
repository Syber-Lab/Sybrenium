
function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */
include("https://cdn.jsdelivr.net/npm/sybrenium-js@0.0.6/sybrenium-js/sybrenium.js");