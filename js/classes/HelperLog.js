export default class {
	AUTHOR_DATA = `
    
Author: Gabriel Dantas\nhttps://github.com/mnegabriel
🙌 script connected!`;

	constructor(initialMessage = "'insert initial message'") {
		this.log(initialMessage + this.AUTHOR_DATA);
	}

	log(message) {
		console.log(...this._formatLogStyle(message));
	}

	_formatLogStyle(textToAdd) {
		return [
			`%c${textToAdd}`,
			`
                    background-color: #333333; 
                    border-radius: 5px; 
                    border: 2px solid #5555dd; 
                    padding: 10px 18px;
                    display: grid;
                    grid-template-columns: 1fr;
                `,
		];
	}
}
