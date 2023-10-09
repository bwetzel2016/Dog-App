const { Go1, Go1Mode } = require("@droneblocks/go1-js");

class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();                                                                                                                             
  }

  async start() {
    await this.robotDog.wait(1000);
    this.robotDog.setMode(Go1Mode.dance1);
    

  }
}

const client = new myClient();
client.start();