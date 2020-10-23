const fs = require('fs')
const path = require('path')

/**
 * writes passed version to package.json and package.lock.json
 *
 * @param {string }v version
 */
function writeNewVer (v) {
  const files = [
    path.resolve('package.json'),
    path.resolve('package-lock.json'),
  ]

  files.forEach(file => {
    const data = JSON.parse(fs.readFileSync(file))
    data.version = v
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
  })
}

module.exports = { writeNewVer: (v) => writeNewVer(v) }