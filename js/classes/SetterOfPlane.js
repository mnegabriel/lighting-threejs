import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_PLANE_SIZE = 40;
	_REPEATING_FACTOR = this._PLANE_SIZE / 2;

	constructor() {
		this._setPlaneTexture();
		this._createPlaneMesh();
	}

	_setPlaneTexture() {
		const loader = new THREE.TextureLoader();
		this.texture = loader.load("resources/images/checker.png");

		this.texture.wrapS = THREE.RepeatWrapping;
		this.texture.wrapT = THREE.RepeatWrapping;
		this.texture.magFilter = THREE.NearestFilter;
		this.texture.repeat.set(this._REPEATING_FACTOR, this._REPEATING_FACTOR);
	}

	_createPlaneMesh() {
		const planeGeometry = new THREE.PlaneGeometry(
			this._PLANE_SIZE,
			this._PLANE_SIZE
		);
		const planeMaterial = new THREE.MeshPhongMaterial({
			map: this.texture,
			side: THREE.DoubleSide,
		});

		this.mesh = new THREE.Mesh(planeGeometry, planeMaterial);
	}
}
