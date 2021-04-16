import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create controls
function controlsCreation(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // Smoother movements for controls
  controls.enableDamping = true;

  return controls;
}

export default controlsCreation;
