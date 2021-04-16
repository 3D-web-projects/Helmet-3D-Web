import { DirectionalLight, CameraHelper } from "three";

function createDirectionalLight(scene) {
  // Directional Light
  const directionalLight = new DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0.25, 3, -2.25);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.far = 10;
  directionalLight.shadow.mapSize.set(1024, 1024);

  scene.add(directionalLight);

  //  Directional Light Camera Helper
  //   const directionalLightCameraHelper = new CameraHelper(
  //     directionalLight.shadow.camera
  //   );
  // scene.add(directionalLightCameraHelper);
}

export default createDirectionalLight;
