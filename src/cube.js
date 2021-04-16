import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";

function cube(scene) {
  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0xffffff });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
}

export default cube;
