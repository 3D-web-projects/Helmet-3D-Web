import {
  WebGLRenderer,
  sRGBEncoding,
  ACESFilmicToneMapping,
  PCFSoftShadowMap,
} from "three";

// Renderer creation
function rendererCreation(canvas, sizes) {
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  return renderer;
}

export default rendererCreation;
