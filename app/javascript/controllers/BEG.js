const { Go1, Go1Mode } = require("@droneblocks/go1-js");


//BEG Mode has to wait 6 seconds

class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();                                                                                                                             
  }

  async begMode() {
    for (let i = 0; i < 2; i++) {
      await this.robotDog.wait(1000);
      this.robotDog.setMode(Go1Mode.straightHand1);
      await this.robotDog.wait(3000);
    }
    await this.robotDog.wait(3000);
  }
}

const client = new myClient();
client.begMode();