cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-google-analytics.UniversalAnalytics",
    "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
    "pluginId": "cordova-plugin-google-analytics",
    "clobbers": [
      "analytics",
      "ga"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-google-analytics": "1.8.3",
  "cordova-plugin-splashscreen": "5.0.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});