const { Go1 } = require("@droneblocks/go1-js");

class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();
    this.robotDog.resetBody();
  }

  async cancel() {
    for (let i = 0; i < 10; i++) {
      //resets the previously queued movements
      await this.robotDog.resetBody();
    } 
  }
}

const client = new myClient();
client.cancel();