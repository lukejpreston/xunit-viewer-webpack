const fs = require('fs')
const path = require('path')
const parser = require('./parser')

const data = path.resolve(__dirname, './data')
const output = require(path.join(data, 'output.json'))

const getInput = (name) => {
  return fs.readFileSync(path.join(data, `${name}.xml`)).toString()
}

let input = getInput('special_chars_suite')

test('works', () => {
  return parser.parse(input)
    .then((parsed) => {
      expect(parsed).toEqual(output)
    })
})

test('works for special chars in suite name', () => {
  return parser.parse(input).then((parsed) => {
    expect(parsed[1].name).toEqual('@release2017.1.0,, @Mcc272151_10: Display List of Records')
  })
})
