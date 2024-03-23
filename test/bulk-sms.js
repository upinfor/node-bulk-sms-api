const Bulk   = require("../lib/Bulk");
const testData = require ('./test-data.json');

Bulk.sendMessage(testData.message,testData.phone,function(response) {
    expect(response).to.not.be.empty;                              
           
})