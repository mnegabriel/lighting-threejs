import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_FOV = 40;
	_CLIPPING_PLANE_NEAR = 0.01;
	_CLIPPING_PLANE_FAR = 1000;

	constructor() {
		this._startInitialSetup();
	}

	_startInitialSetup() {
		const canvas = document.querySelector("#c");

		this.renderer = new THREE.WebGLRenderer({ canvas });
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(...this._getCameraConfig());

		// this._repositionAndPointCamera()
		this._setRenderSizeAndCameraAspectRatio();
		this._addResizeEventListener();
	}

	_getCameraConfig() {
		return [
			this._FOV,
			this._getWindowAspectRatio(),
			this._CLIPPING_PLANE_NEAR,
			this._CLIPPING_PLANE_FAR,
		];
	}

	_getWindowAspectRatio() {
		return window.innerWidth / window.innerHeight;
	}

	_repositionAndPointCamera() {
		this.camera.position(0, 0, 10);
		// this.camera.up.set(0, 0, 1)
		this.camera.lookAt(0, 0, 0);
	}

	_setRenderSizeAndCameraAspectRatio() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.aspect = this._getWindowAspectRatio();

		this.camera.updateProjectionMatrix();
	}

	_addResizeEventListener() {
		window.addEventListener("resize", () =>
			this._setRenderSizeAndCameraAspectRatio()
		);
	}
}
