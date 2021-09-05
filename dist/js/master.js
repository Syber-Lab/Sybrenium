function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

/* Include Many js files */
include('https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js');
include('https://cdn.jsdelivr.net/gh/Syber-Lab/Sybrenium@main/dist/js/jquery.draggableTouch.js');
include('https://cdn.jsdelivr.net/gh/Syber-Lab/Sybrenium@main/dist/js/myscriptfunctional.js');
