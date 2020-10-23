const shell = require('child_process')

/**
 * Creates a git tag
 *
 * @param {string} v version
 */
function createTag (v) {
  try {
    shell.execSync(`git tag v${v} -m "Version v${v}"`)
    shell.execSync('git push origin --tags')
  } catch (error) {
    console.log('Error while creating a tag')
  }
}

module.exports = { createTag: (v) => createTag(v) }
