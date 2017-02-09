cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-dialclient.DIALClient",
        "file": "plugins/cordova-dialclient/www/DIALClient.js",
        "pluginId": "cordova-dialclient",
        "clobbers": [
            "DIALClient"
        ]
    },
    {
        "id": "cordova-dialclient.Adder",
        "file": "plugins/cordova-dialclient/www/Adder.js",
        "pluginId": "cordova-dialclient",
        "clobbers": [
            "Adder"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-dialclient": "0.0.1"
};
// BOTTOM OF METADATA
});