var t = 0;
var c = document.querySelector("canvas");
var $ = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
$.fillStyle = 'hsla(0,0%,0%,1)';

window.addEventListener('resize', function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}, false);

function draw() {
  $.globalCompositeOperation = 'source-over';
  $.fillStyle = 'hsla(0,0%,0%,.1)';
  $.fillRect(0, 0, c.width, c.height);
  var foo, i, j, r;
  foo = Math.sin(t) * 2 * Math.PI;
  for (i = 0; i < 400; ++i) {
    r = 400 * Math.sin(i * foo);
    $.globalCompositeOperation = '';
    $.fillStyle = 'hsla(' + i + 12 + ',100%, 60%,1)';
    $.beginPath();
    $.arc(Math.sin(i) * r + (c.width / 2),
      Math.cos(i) * r + (c.height / 2),
      1.5, 0, Math.PI * 2);
    $.fill();

  }
  t += 0.000005;
  return t %= 2 * Math.PI;

};

function run() {
  window.requestAnimationFrame(run);
  x = draw();

  const process = document.querySelector('.btn-success');
  const div = document.querySelector('.canvasdiv');
  const transactBtn = document.querySelector('.lnkBtn');
  setInterval(() => {
    if (x == 0.0017950000000000043) {
      process.style.visibility = "visible";
      div.style.visibility = "visible";
      transactBtn.style.visibility = "visible";
    }
  }, 500);

}
run();

const progress = document.querySelector('.progress-done');
setTimeout(() => {
  progress.style.opacity = 1;
  progress.style.width = progress.getAttribute('data-done') + '%';
}, 200);

const canvas_2d = document.getElementById('canvasPaper');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: canvas_2d });
renderer.setSize(500, 400);
const geometry = new THREE.DodecahedronGeometry(1, 0);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
var n = 0.0000;
function animate() {
  requestAnimationFrame(animate);
  n += 0.0001;
  var y = Math.sin(Math.PI / (n * 60));
  cube.rotation.z += (Math.cos(Math.PI / (n * 60)));
  cube.rotation.x += y ^ 2;
  cube.rotation.y += 3 * y ^ (y - 1) / n;
  setTimeout(() => {
    cube.position.y = Math.sin((y) - (3 * y ^ (y - 1)) / Math.PI);
    cube.position.x = Math.cos(-(3 / y ^ (y + 1) + y)) / Math.PI;
    cube.position.z = y * n;
  }, 10);

  renderer.render(scene, camera);
}
animate();

const bodyAlertSys = document.getElementsByClassName("container-alert")[0];
const childLeft = bodyAlertSys.children[0];
const childRight = bodyAlertSys.children[1];
const closeFailBtn = childLeft.children[2];
const closeSuccessBtn = childRight.children[1];

function onrequestaction() {
  childLeft.style.visibility = "hidden";
}

closeFailBtn.addEventListener('click', onrequestaction, false);

function onrequestsuccess() {
  childRight.style.visibility = "hidden";
}

closeSuccessBtn.addEventListener('click', onrequestsuccess, false);

