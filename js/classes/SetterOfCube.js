import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	constructor() {
		this._setCubeMesh();
	}

	_setCubeMesh() {
		this.cubeSize = 4;
		const cubeGeo = new THREE.BoxGeometry(
			this.cubeSize,
			this.cubeSize,
			this.cubeSize
		);
		const cubeMat = new THREE.MeshPhongMaterial({ color: "#8AC" });
		this.mesh = new THREE.Mesh(cubeGeo, cubeMat);
	}
}
