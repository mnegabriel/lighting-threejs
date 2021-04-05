import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

import InitialSetupper from "./InitialSetupper.js";

export default class {
	constructor() {
		this._boot();
	}

	_boot() {
		this.world = new InitialSetupper();
	}
}
