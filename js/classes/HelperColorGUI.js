export default class {
	constructor(object, prop) {
		this.object = object;
		this.prop = prop;
	}

	get value() {
		return `#${this._currObjectPropValue()}`;
	}

	set value(hexString) {
		this.object[this.prop].set(hexString);
	}

	_currObjectPropValue() {
		return this.object[this.prop].getHexString();
	}
}
