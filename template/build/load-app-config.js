const path = require('path')
const YAML = require('yamljs')
const config = YAML.load(path.resolve(__dirname, '..', 'config/config.yml'))

module.exports = function (mode = "production") {
  return mode in config ? config[mode] : {}
}
