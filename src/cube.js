import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";

function cube(width, height, depth, color) {
  const geometry = new BoxBufferGeometry(width, height, depth);
  const material = new MeshBasicMaterial({ color: color });
  const cube = new Mesh(geometry, material);
  console.log(cube);
  return cube;
}

export default cube;
