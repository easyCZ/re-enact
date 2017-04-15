const test = require('tape');
const cleanup = require('jsdom-global')()
const createElement = require('../lib').createElement;

test('create an empty div with no attributes', t => {

  const div = createElement('div', null);

  t.equal(
    div.nodeName,
    'DIV',
    'should have a node name of "div"');

  t.equal(
    0,
    div.attributes.length,
    'should have no attributes');

  t.equal(
    0,
    div.children.length,
    'should have no children');

  t.end();
})

test('crate an unknown html element', t => {

  const elem = createElement('yay', null);

  console.log(elem)

  t.ok(
    elem instanceof HTMLUnknownElement,
    'should be an instance of HTMLUnknownElement')

  t.equal(
    elem.nodeName,
    'YAY',
    'should have a node name of "yay"')

  t.equal(
    elem.children.length,
    0,
    'should have no children');

  t.equal(
    elem.attributes.length,
    0,
    'should have no children');

  t.end();
})

test('create a div element with attributes', t => {

  const div = createElement('div', { width: 50, height: 60 })

  t.ok(
    div instanceof HTMLDivElement,
    'should of HTMLDivElement type');

  t.equal(
    div.attributes.length,
    2,
    'should have 2 element attributes')

  t.equal(
    div.attributes.getNamedItem('width').value,
    '50',
    'should have width set to 50')

  t.equal(
    div.attributes.getNamedItem('height').value,
    '60',
    'should have height set to 60');

  t.end();
})

test('object as a style attribute should be mapped to string', t => {
  const div = createElement('div', { style: { height: 50, width: 60 }});

  t.ok(
    div.attributes.getNamedItem('style').value.indexOf('height: 50') >= 0,
    'should contain height: 50 in the style attributes')

  t.ok(
    div.attributes.getNamedItem('style').value.indexOf('width: 60') >= 0,
    'should contain width: 60 in the style attribute')

  t.end();
})
