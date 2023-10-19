const { Client } = require('ssh2');

function connectWithRetry() {
	const conn = new Client();

	conn.on('ready', () => {
		// Connection successful, do whatever you want
		console.log('Connected successfully!');
		// Your code here...
		conn.exec('cd /home/unitree/UnitreeSLAM/ && timeout 150 /bin/bash patrol3', (err, stream) => {
			if (err) throw err;
			stream.on('close', (code) => {
				console.log('Stream :: close :: code: ' + code);
				// End the connection when done
				conn.end();	
			});

			stream.on('data', (data) => {
				console.log('STDOUT: ' + data);
			});

			stream.stderr.on('data', (data) => {
				console.log('STDERR: ' + data);
			});

    
			
		});
	});

	conn.on('error', (err) => {
		console.error('Connection error:', err);
		// Retry after a certain delay
		setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
	});

	// Connect to the SSH server
	conn.connect({
		host: '192.168.123.15',
		port: 22,
		username: 'unitree',
		password: '123',  // or provide private key details
	});
}

// Call the retry function when needed
connectWithRetry();