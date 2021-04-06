import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	constructor() {
		this._setSphereMesh();
	}

	_setSphereMesh() {
		const sphereRadius = 3;
		const sphereWidthDivisions = 32;
		const sphereHeightDivisions = 16;
		const sphereGeo = new THREE.SphereGeometry(
			sphereRadius,
			sphereWidthDivisions,
			sphereHeightDivisions
		);
		const sphereMat = new THREE.MeshPhongMaterial({ color: "#CA8" });
		this.mesh = new THREE.Mesh(sphereGeo, sphereMat);
	}
}
