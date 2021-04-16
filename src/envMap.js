import { CubeTextureLoader, sRGBEncoding } from "three";
import envURLs from "./environmentURLS";

let environmentMap;

// Get env map
function getEnvironmentMap() {
  if (!environmentMap) {
    environmentMap = envMapInit();
  }
  return environmentMap;
}

/**
 * Environment Map
 */
function envMapInit() {
  const cubeTextureLoader = new CubeTextureLoader();
  const environmentMap = cubeTextureLoader.load(envURLs);

  environmentMap.encoding = sRGBEncoding;

  return environmentMap;
}

export default getEnvironmentMap;
