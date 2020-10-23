const options = require('./lib/arg-options.js')
const fileWriter = require('./lib/file-writer.js')
const git = require('./lib/git.js')
const version = require('./lib/version.js')
const { bump, major, minor, patch, tag } = options

let newVersion
if (bump) {
  if (!version.isValid(bump)) {
    console.log('Error: Incorrect version format!')
    return
  }
  newVersion = bump
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