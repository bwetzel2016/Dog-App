const { Go1, Go1Mode } = require("@droneblocks/go1-js");
const { Client } = require('ssh2');


class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();
    this.conn = new Client();                                                                                                                           
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

  async connectWithRetry() {
    this.conn.on('ready', () => {
      // Connection successful
      console.log('Connected successfully!');
      // this.conn.exec('python3 /home/unitree/talk/DANCING.py
      this.conn.exec('uname -a', (err, stream) => {
        if (err) throw err;
        stream.on('close', (code) => {
          console.log('Stream :: close :: code: ' + code);
          // End the connection
          this.conn.end();
        });

        stream.on('data', (data) => {
          console.log('STDOUT: ' + data);
        });

        stream.stderr.on('data', (data) => {
          console.log('STDERR ' + data);
        });
      });
    });

    this.conn.on('error', (err) => {
      console.error('Connection error:', err);
      // Retry after a certain delay
      setTimeout(client.connectWithRetry, 4000); // Retry after 4 seconds
    });

    this.conn.connect({
      host: '192.168.123.13',
      port: 22,
      username: 'unitree',
      password: '123',
    });
  }
}

const client = new myClient();
client.start();
client.policeLights();
client.connectWithRetry();