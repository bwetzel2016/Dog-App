const { Go1, Go1Mode } = require("@droneblocks/go1-js");

class myClient {                                                                                                                                           
    constructor() {                                                                                                                                          
      this.robotDog = new Go1();
      this.robotDog.init();                                                                                                                             
    }

  async changeLED() {
  	for (let i = 0; i < 1; i++) {
  		const colors = [
  			{ r: 255, g: 0, b: 0}, // RED
  			{ r: 255, g: 165, b: 0 }, //Orange
  			{ r: 255, g: 255, b: 0}, //Yellow
  			{ r: 0, g: 255, b: 0}, //Green
  			{ r: 75, g: 0, b: 130}, //Indigo
  			{ r: 148, g: 0, b: 211} //Purple

  		];

  		const randomColorIndex = Math.floor(Math.random() * colors.length);
  		const randomColor = colors[randomColorIndex];                                                                    
		await this.robotDog.setLedColor(randomColor.r, randomColor.g, randomColor.b);
  	}
  }
}
const client = new myClient();
client.changeLED();