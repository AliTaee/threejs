import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
// Every object in Three.js is a mesh and it requires a geometry and a material
// Geometry: The shape of the object
// Material: The appearance of the object
const group = new THREE.Group()
scene.add(group) // We need to add it to scene to see the group
group.scale.y = 2
group.rotation.x = Math.PI / 6

const cub1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cub1)

const cub2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cub2.position.x = -2
group.add(cub2)

const cub3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cub3.position.x = 2
group.add(cub3)

// Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// At the end we need 4 things
// Scene
// Objects
// Camera
// Renderer
