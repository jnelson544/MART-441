
var a;
var b;
var c;

var scene = new THREE.Scene();
scene.background = new THREE.Color(0xC06CE4);

function getCamera(a,b,c) {
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(a, aspectRatio, b, c);
    camera.position.set(0, 90, -10);
    return camera;
}

var camera = getCamera(520,0.1,1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//floating cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x73030B
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.scale.set(40, 40, 40);
cube.position.x = 100;
cube.position.y = 100;
camera.position.z = 2; 

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

//floating text
var increment = 0;
var render = function () {
  increment += 0.01;
  requestAnimationFrame(render);

  spinCamera();
  renderer.render(scene, camera);
};

var text = "aems",
  height = 2,
  size = 15,
  curveSegments = 10,
  bevelThickness = 1,
  bevelSize = 0.3,
  bevelSegments = 3,
  bevelEnabled = true,
  font = undefined;

var rotation = 0;

function spinCamera() {
  rotation += 0.009;
  camera.position.z = Math.sin(rotation) * 100;
  camera.position.x = Math.cos(rotation) * 80;
  camera.position.y = Math.cos(rotation) * 80;
  camera.lookAt(scene.position);
}

function loadFont() {
  var loader = new THREE.FontLoader();

  loader.load("https://montana-media-arts.github.io/441-WebTech-Spring2022-Examples/Week%2014/fonts/helvetiker_regular.typeface.json", function (res) {
    font = res;
    createText();
  });
}

function createText() {
  textGeo = new THREE.TextGeometry("YAY", {
    font: font,
    size: size,
    height: height,
    curveSegments: curveSegments,
    weight: "normal",
    bevelThickness: bevelThickness,
    bevelSize: bevelSize,
    bevelSegments: bevelSegments,
    bevelEnabled: bevelEnabled
  });
  textGeo.computeBoundingBox();
  textGeo.computeVertexNormals();

  var color = new THREE.Color(0x037358);
  var textMaterial = new THREE.MeshBasicMaterial({
    color: color
  });
  var text = new THREE.Mesh(textGeo, textMaterial);
  text.position.x = -textGeo.boundingBox.max.x *2;
  console.log(text.position.x);
  text.position.y = -textGeo.boundingBox.max.y *8;
  console.log(text.position.y);
  text.position.z = -2;
  text.rotation.y = Math.PI;
  text.castShadow = true;
  scene.add(text);
}

//floating model
function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}

function loadModel() {
  var loader = new THREE.OBJLoader();
  loader.load(
    "images/tinker.obj", function (object) {
      object.rotation.x = Math.PI + 2;
      scene.add(object);
    }
  );
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
}

var light = getLight(scene);
var controls = getControls(camera, renderer);

loadModel();
loadFont();
render();