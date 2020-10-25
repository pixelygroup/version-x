const options = require('./lib/arg-options.js')
const fileWriter = require('./lib/file-writer.js')
const git = require('./lib/git.js')
const version = require('./lib/version.js')
const { exact, major, minor, patch, tag } = options

let newVersion
if (exact) {
  if (!version.isValid(exact)) {
    console.log('Error: Incorrect version format!')
    return
  }
  newVersion = exact
} else if (major) {
  newVersion = version.getMajor()
} else if (minor) {
  newVersion = version.getMinor()
} else if (patch) {
  newVersion = version.getPatch()
} else {
  console.log('At least 1 option required!')
  return
}

fileWriter.writeNewVer(newVersion)

if (tag) {
  git.createTag(newVersion)
}

console.log('Success! The new version is set to:', newVersion)