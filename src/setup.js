// import * as THREE from "three";
import getEnvironmentMap from "./envMap";
import sceneCreation from "./sceneCreation";
import initializeResizeEventListener from "./windowResize";
import gameLoopSetup from "./gameLoop";
import createDirectionalLight from "./directionalLight";
import cameraCreation from "./camreaCreation";
import controlsCreation from "./controlsCreation";
import rendererCreation from "./rendererCreation";

// Setting up THREE.js

function setup() {
  // Environment Map
  const environmentMap = getEnvironmentMap();

  // Canvas sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Canvas DOM
  const canvas = document.querySelector("canvas.webgl");

  // Scene creation
  const scene = sceneCreation(environmentMap);

  // Camera creation
  const camera = cameraCreation(scene, sizes);

  // Controls creation
  const controls = controlsCreation(camera, canvas);

  // Renderer creation
  const renderer = rendererCreation(canvas, sizes);

  // Resize Canvas EventListener
  initializeResizeEventListener(sizes, camera, renderer);

  // Game loop
  gameLoopSetup(controls, scene, camera, renderer);

  // Directional Light creation
  createDirectionalLight(scene);

  // Create cube
  const cube = cubeCreation(2, 2, 2, 0xffffff);
  scene.add(cube);

  return {
    scene,
    //  canvas,
    //  renderer,
    //  sizes,
    //  camera,
    //  controls,
  };
}

export default setup;
