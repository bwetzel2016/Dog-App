const { Go1, Go1Mode } = require("@droneblocks/go1-js");

class myClient {																																		   
	constructor() {                                                                                                                                          
		this.robotDog = new Go1();
		this.robotDog.init();                                                                                                                             
	}

	async onMessage() {
		//WALKING
		const SLOW_SPEED = 0.10000000000000000;
		const MED_SPEED = 0.50000000000000000;
		const FAST_SPEED = 0.90000000000000000;
		
		//LOOK DOWN
		await this.robotDog.wait(5000);
		for (let i = 0; i < 2; i++) {
			await this.robotDog.wait(1000);
			this.robotDog.setMode(Go1Mode.stand);
			await this.robotDog.lookDown(FAST_SPEED, 100);
		}	
	}
}

const client = new myClient;
client.onMessage();