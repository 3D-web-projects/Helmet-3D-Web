import { PerspectiveCamera } from "three";

// Camera creation
function cameraCreation(scene, sizes) {
  const camera = new PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );

  // Position camera
  camera.position.set(4, 1, -4);

  // Add camera to the scene
  scene.add(camera);

  return camera;
}

export default cameraCreation;
