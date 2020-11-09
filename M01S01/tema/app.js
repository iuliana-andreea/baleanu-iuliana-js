var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var inputRadius = document.getElementById('radius');
var elementArea = document.getElementById('area');
var elementVolume = document.getElementById('volume');
var elementSurface = document.getElementById('surface');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var height = inputHeight.value || 0;
    var radius = inputRadius.value || 0;
    var area = 0;
    var volume = 0;
    var surface = 0;

    if (length != '' && width != '' && height != '') {
      volume = 'Volumul este ' + length * width * height;
    } else if (length != '' && width != '') {
      area = 'Aria dreptunghiului este ' + length * width;
    } else if (radius != '') {
      area = 'Aria cercului este ' + Math.PI * Math.pow(radius, 2);
      volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      surface = 4 * Math.PI * Math.pow(radius, 2);
    }

    elementArea.innerText = area;
    elementVolume.innerText = volume;
    elementSurface.innerText = surface;

    e.preventDefault();
  },
  false,
);
