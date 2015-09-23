/*
 * Backblaze B2
 */

var curl = require('curlrequest');

var B2 = function(accountId, applicationKey, options) {
	this._accountId = accountId;
	this._applicationKey = applicationKey;
	
	options = options || function(){};
};


B2.prototype.authorizeAccount = function() {
    console.log(this._accountId + ':' + this._applicationKey);
    var options = {
        url: 'https://api.backblaze.com/b2api/v1/b2_authorize_account'
      , user: this._accountId + ':' + this._applicationKey
    };

    curl.request(options, function (err, file) {
        console.log(file);
    });
};


exports.B2 = B2;
