# node-bulk-sms-api
node-bulk-sms-api is a module for use of bulk-SMS service for sending text messages using the bulk sms service (http://www.bulksms.com/) 

# Usage
var bulk = require('your-folder/lib/Bulk.js');

bulk.setUsername('your username');
bulk.setPassword('your password');
bulk.sendMessage('message','cell phone',function(result){
    console.log(result);
});
 
```
# More informations
http://www.bulksms.com/