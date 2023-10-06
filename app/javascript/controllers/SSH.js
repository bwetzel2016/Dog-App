const { Client } = require('ssh2');

class myClient {
	constructor() {
		this.conn = new Client();
	}

	async connect() {
		this.conn.on('ready', () => {
			console.log('Client :: ready');
			this.conn.exec('uname -a', (err, stream) => {
				if (err) throw err;
				stream.on('close', (code, signal) => {
					console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
					this.conn.end();
				}).on('data', (data) => {
					console.log('STDOUT: ' + data);
				}).stderr.on('data', (data) => {
					console.log('STDERR: ' + data);
				});
			});
		}).connect({
			host: '10.0.0.107',
			port: 22,
			username: 'robot',
			password: 'robot'
		});
	}
}

const myConnect = new myClient();
myConnect.connect();


