import { Scene } from "three";

// Scene Creation
function sceneCreation(environmentMap) {
  // Instaniate scene
  const scene = new Scene();

  // use environmentMap
  scene.background = environmentMap;
  scene.environment = environmentMap;

  return scene;
}

export default sceneCreation;
