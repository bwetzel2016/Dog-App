const { Go1, Go1Mode } = require("@droneblocks/go1-js");
const { Client } = require('ssh2');

class myClient {                                                                                                                                           
  constructor() {                                                                                                                                          
    this.robotDog = new Go1();
    this.robotDog.init();
    this.conn = new Client();                                                                                                                           
  }

  async changeLED() {
    for (let i = 0; i < 1; i++) {
      const colors = [
        { r: 255, g: 0, b: 0 }, // RED
        { r: 255, g: 165, b: 0 }, //Orange
        { r: 255, g: 255, b: 0 }, //Yellow
        { r: 0, g: 255, b: 0 }, //Green
        { r: 75, g: 0, b: 130 }, //Indigo
        { r: 148, g: 0, b: 211 } //Purple

      ];

      const randomColorIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomColorIndex];                                                                    
      await this.robotDog.setLedColor(randomColor.r, randomColor.g, randomColor.b);
    }
  }
  async connectWithRetry() {
    this.conn.on('ready', () => {
      // Connection successful
      console.log('Connected successfully!');

      this.conn.exec('python3 /home/unitree/talk/LAZER.py', (err, stream) => {
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
client.changeLED();
client.connectWithRetry();