const yargs = require('yargs')

const options = yargs
  .usage(`Usage: -b 1.1.1 <version> / -m <major> / -i <minor> / -p <patch>.
    \nIn case of passing multiple options,
    \nthe conditions will be checked and applied
    \nin the same order (left > right)`)
  .option('b', {
    alias: 'bump',
    describe: 'requires version in format 1.1.1 or 1.1.1-beta, etc.',
    type: 'string',
  })
  .option('m', {
    alias: 'major',
    describe: 'Bumps a version on X position X.1.1',
    type: 'boolean',
  })
  .option('i', {
    alias: 'minor',
    describe: 'Bumps a version on X position 1.X.1',
    type: 'boolean',
  })
  .option('p', {
    alias: 'patch',
    describe: 'Bumps a version on X position 1.1.X',
    type: 'boolean',
  })
  .option('t', {
    alias: 'tag',
    describe: 'Creates and pushes git tag',
    type: 'boolean',
  })
  .argv

module.exports = Object.freeze({ ...options })