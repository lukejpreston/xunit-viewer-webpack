const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('results', 'Location of xml file(s) or folder(s) containing xml')
  .array('results')
  .default('r', '.')
  .alias('r', 'results')
  .describe('r', 'Load xml')

  .command('ignore', 'File Patterns to ignore')
  .alias('i', 'ignore')
  .describe('i', 'Ignore pattern')
  .default('i', '')
  .array('ignore')

  .command('output', 'Name of output file')
  .alias('o', 'output')
  .default('o', 'index.html')
  .describe('o', 'output')
  .string('o')

  .command('terminal', 'Log the results in the terminal')
  .alias('c', 'terminal')
  .describe('c', 'terminal')
  .default('c', false)
  .boolean('c')

  .command('watch', 'Re-run on file changed')
  .alias('w', 'watch')
  .describe('w', 'Watch mode')
  .default('w', false)
  .boolean('watch')

  .command('port', 'Start serving on port')
  .alias('p', 'port')
  .describe('p', 'Port')
  .default('p', false)
  .number('port')

  .command('serve', 'Start serving')
  .alias('s', 'serve')
  .describe('s', 'serve')
  .default('s', false)
  .boolean('serve')

  .command('title', 'Title of output')
  .alias('t', 'title')
  .default('t', 'Xunit Viewer')
  .describe('t', 'title')
  .string('t')

  .command('dev', 'Start in dev mode')
  .alias('d', 'dev')
  .describe('d', 'Dev mode')
  .default('d', false)
  .boolean('dev')

  .alias('h', 'help')
  .alias('v', 'version')
  .argv

console.log(argv.port)

// results
// ignore
// dev
// watch
// port
// filter
// title
// output
