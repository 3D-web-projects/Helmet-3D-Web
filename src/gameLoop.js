/**
 * Animate
 */

const gameLoopSetup = (controls, scene, camera, renderer) => {
  const gameLoop = () => {
    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(gameLoop);
  };

  // Initialize the animation
  gameLoop();
};

export default gameLoopSetup;
