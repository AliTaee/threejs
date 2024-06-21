import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Settings Elements
 */
const colorInput = document.getElementById('cubeColor')
const animationInputs = document.querySelectorAll(
  'input[name="animation_type"]'
)
let animationType = 'none'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x17d372 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update the camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)

  // If user move his/her window to another screen it going to be adjusted
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Fullscreen
window.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})

/*
 * Settings
 */
colorInput.addEventListener('change', (event) => {
  const newColor = event.target.value
  mesh.material.color.set(newColor)
})

animationInputs.forEach((element) => {
  element.addEventListener('click', (event) => {
    animationType = event.target.value
  })
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const animations = {
    none: mesh.rotation.y,
    simple: elapsedTime,
    sin: Math.sin(elapsedTime),
    cos: Math.cos(elapsedTime),
  }

  mesh.rotation.y = animations[animationType]

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
