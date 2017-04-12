const test = require('tape');
const cleanup = require('jsdom-global')()

test('should work', t => {

  t.equal('test', 'aa', 'should be the same');

  t.end();
})