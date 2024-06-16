import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Track mouse cursor for custom camera control.
// We commented because we are using OrbitControls.
// const cursor = {
//   x: 0,
//   y: 0,
// }
// window.addEventListener('mousemove', (event) => {
//   cursor.x = event.clientX / sizes.width - 0.5
//   cursor.y = -(event.clientY / sizes.height - 0.5) // In THREE.JS Y positive is going up so we reverse it
// })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// )
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const control = new OrbitControls(camera, canvas)
control.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

const tick = () => {
  // Custom Update camera base on mouse cursor
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  // camera.position.y = cursor.y * 5
  // camera.lookAt(mesh.position)

  // Render
  renderer.render(scene, camera)

  // Update controller to reflect the Damping
  control.update()

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
