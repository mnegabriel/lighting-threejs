import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js";
import { GUI } from "https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js";

import InitialSetupper from "./InitialSetupper.js";
import SetterOfPlane from "./SetterOfPlane.js";
import SetterOfCube from "./SetterOfCube.js";
import SetterOfSphere from "./SetterOfSphere.js";

export default class {
	constructor() {
		this._boot();
	}

	_boot() {
		this.world = new InitialSetupper();

		this._createElementsObject();
		this._positionAndRotateElements();
		this._addElementsToWorld();
		this._setOrbitController();

		// window.world = this.world

		// this._animate()
	}

	_createElementsObject() {
		const groundPlane = new SetterOfPlane().mesh;
		const cube = new SetterOfCube().mesh;
		const sphere = new SetterOfSphere().mesh;

		const color = 0xFFFFFF;
		const intensity = 1;
		const light = new THREE.AmbientLight(color, intensity);

		this.objects = { groundPlane, cube, sphere, light };
	}

	_positionAndRotateElements() {
		const { groundPlane, cube, sphere } = this.objects;

		groundPlane.rotation.x = -0.5 * Math.PI;

		const cubeDepth = cube.geometry.parameters.depth;
		cube.position.set(cubeDepth + 1, cubeDepth / 2, 0);

		const sphereRadius = sphere.geometry.parameters.radius;
		sphere.position.set(-sphereRadius - 1, sphereRadius + 2, 0);

		this.objects = {
			...this.objects,
			groundPlane,
			cube,
			sphere,
		};
	}

	_addElementsToWorld() {
		Object.values(this.objects).forEach((obj) => {
			this.world.scene.add(obj);
		});
	}

	_setOrbitController() {
		this.controls = new OrbitControls(
			this.world.camera,
			document.querySelector("#c")
		);
		this.controls.target.set(0, 5, 0);
		this.controls.update();
	}

	_animate(time) {
		this.world.renderer.render(
			this.world.scene,
			this.world.camera
		)
		time % 3000 === 0 && console.log({time})
		// window.requestAnimationFrame(() => this._animate)
	}
}
