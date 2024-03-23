const https = require('https');

module.exports = {
    username  : "",
    password  : "",

    setUsername: function (user) {
        this.username = user;
    },
    
    getUsername: function () {
        return this.username;
    },
    
    setPassword: function (pass) {
        this.password = pass;
    },
    
    getPassword: function () {
        return this.password;
    },
  
    sendMessage: function (message, phone, callback) {

    try {
            if (message && phone !== null) {
                var postData = JSON.stringify({
                    'to' : phone,
                    'body': message,
                    'encoding': 'UNICODE'
                });
                
                let options = {
                    hostname: 'api.bulksms.com',
                    port: 443,
                    path: '/v1/messages',
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Content-Body': postData.length,
                      'Authorization': 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64')
                    }
                  };
                  
                  let req = https.request(options, (resp) => {
                    console.log('statusCode:', resp.statusCode);
                    let data = '';
                      resp.on('data', (chunk) => {
                      data += chunk;
                    });
                    resp.on('end', () => {
                      console.log("Response:", data);
                    });
                  });
                  
                  req.on('error', (e) => {
                    console.error(e);
                  });
                  req.write(postData);
                  req.end();
            }
        
        } catch (error) {
            console.error(error);
        }
    }
}