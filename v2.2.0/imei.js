cordova.define("cordova/plugin/imei",
  function(require, exports, module) {
    var exec = require("cordova/exec");

    var IMEI = function(){};
    
    IMEI.prototype.get = function(onSuccess, onFail){
        return cordova.exec(onSuccess, onFail, 'IMEI', 'get', []);
    };

    var imei = new IMEI();
    module.exports = imei;
});

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.imei) {
    window.plugins.imei = cordova.require("cordova/plugin/imei");
}