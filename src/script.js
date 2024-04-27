import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
// Every object in Three.js is a mesh and it requires a geometry and a material
// Geometry: The shape of the object
// Material: The appearance of the object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(1);

// We need to add every object to the scene in order to render it
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
camera.position.y = -1;
camera.position.x = 1;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// At the end we need 4 things
// Scene
// Objects
// Camera
// Renderer
