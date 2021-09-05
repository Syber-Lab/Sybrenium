function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */
include('https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js');
include('https://cdn.jsdelivr.net/gh/Yaseen549/js-test-case-sybrenium@main/js/main.js');
include('https://cdn.jsdelivr.net/gh/Yaseen549/js-test-case-sybrenium@main/js/second.js');
