const { Client } = require('ssh2');

class myClient {
	constructor() {
		this.conn = new Client();
	}

	async connect() {
		this.conn.on('ready', () => {
			console.log('Client :: ready');
			this.conn.exec('python3 --version', (err, stream) => {
				if (err) throw err;
				stream.on('close', (code) => {
					console.log('Stream :: close :: code: ' + code);
					this.conn.end();
				}).on('data', (data) => {
					console.log('STDOUT: ' + data);
				}).stderr.on('data', (data) => {
					console.log('STDERR: ' + data);
				});
			});
		}).connect({
			host: '192.168.123.15',
			port: 22,
			username: 'unitree',
			password: '123'
		});
	}
}

const myConnect = new myClient();
myConnect.connect();


