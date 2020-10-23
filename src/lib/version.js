const path = require('path')
const fullVerArr = getCurrent().split('-')
const currentVer = fullVerArr[0]

/**
 * @returns {string} Current version from package.json
 */
function getCurrent () {
  const pathToPackageJson = path.resolve('package.json')
  let version
  try {
    version = require(pathToPackageJson).version
  } catch (err) {
    console.log('ERROR: "package.json" is not present in your directory!')
  }
  return version
}

/**
 * Bumps version to major and returns
 *
 * @param {string} v current version
 * @returns {string} new version
 */
function getMajor (v) {
  const newVer = incrementVersionOnPosition(v, 0)
  return newVer
}
/**
 * Bumps version to major and returns
 *
 * @param {string } v current version
 * @returns {string} new version
 */
function getMinor (v) {
  const newVer = incrementVersionOnPosition(v, 1)
  return newVer
}

/**
 * Patches version and returns
 *
 * @param {string } v current version
 * @returns {string} new version
 */
function getPatch (v) {
  const newVer = incrementVersionOnPosition(v, 2)
  return newVer
}

/**
 * Splits version to array, increments on position, and returns joined string\n
 * and fills with zeros after that
 *
 * @param {string} v current version
 * @param {number} pos position in array
 * @returns {string} new version
 */
function incrementVersionOnPosition (v, pos) {
  const verArr = v.split('.')
  verArr[pos]++
  const newVer = (verArr.map((v, index) => index > pos ? 0 : v )).join('.')
  return newVer
}

/**
 * Verifies if the content is in correct format
 *
 * @param {string} passed version
 * @returns {boolean} is valid
 */
function isValid (passed) {
  const re = /^\d+\.\d+.\d+(-.+)?/ // d.d.d-xxxxxx
  const result = passed.search(re)
  return result === 0
}

module.exports = {
  getCurrent: () => getCurrent(),
  getMajor: () => getMajor(currentVer),
  getMinor: () => getMinor(currentVer),
  getPatch: () => getPatch(currentVer),
  isValid: (toVer) => isValid(toVer),
}
