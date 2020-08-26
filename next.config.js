//const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = {
  webpack(config, options){
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
}

// module.exports = withCSS({
//   cssModules: true,
//   webpack(config, options) {
    
//     // Here is the magic
//     // We push our config into the resolve.modules array
//     config.resolve.modules.push(path.resolve('./'));
//     return config;
//   }
// });