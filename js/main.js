import App from "./classes/App.js";
import HelperLog from "./classes/HelperLog.js";

window.helperLog = new HelperLog("Lighting - threejs");

const app = new App();

function animate(timeElapsed) {
	app._animate();
	requestAnimationFrame(animate);
}
animate();
