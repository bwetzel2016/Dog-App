const { Go1, Go1Mode } = require("@droneblocks/go1-js");

class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();                                                                                                                             
  }

  async policeLights() {
    for(let i = 0; i < 10; i++) {
      await this.robotDog.setLedColor(255, 0, 0);
      await this.robotDog.wait(100);
      await this.robotDog.setLedColor(0, 0, 255);
      await this.robotDog.wait(100);
      this.policeLights()

    }
    
  }  

  async start() {
    await this.robotDog.wait(1000);
    this.robotDog.setMode(Go1Mode.dance1);
    

  }
}

const client = new myClient();
client.start();
client.policeLights();