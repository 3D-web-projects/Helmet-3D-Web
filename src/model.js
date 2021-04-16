import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import getEnvironmentMap from "./envMap";
import { MeshStandardMaterial, Mesh } from "three";

// Initializing model
function modelInit(scene, model) {
  // Instaniate GLTF
  const gltfLoader = new GLTFLoader();

  // Load model
  gltfLoader.load(model, (gltf) => {
    // resize, position, and rotate model
    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.position.set(0, -4, 0);
    gltf.scene.rotation.y = Math.PI * 0.5;

    // add model to the scene
    scene.add(gltf.scene);

    // Call update all materials
    updateAllMaterials(scene);
  });
}

// Update materials for the model
const updateAllMaterials = (scene) => {
  // make a reference for the environment map
  const environmentMap = getEnvironmentMap();

  // Traverse the scene and get each child
  scene.traverse((child) => {
    // ONLY apply environmentMap to the child which has a Mesh and MeshStandMaterial
    if (
      child instanceof Mesh &&
      child.material instanceof MeshStandardMaterial
    ) {
      child.material.envMap = environmentMap;

      // Cast ans recieve shadows for each child
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
};

export default modelInit;
