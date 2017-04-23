
export class Component {

  constructor(props) {
    this.props = props;
  }

  componentDidMount() {
    console.log('did mount');
  }

  // setState(newState) {
  //   this.state = {...this.state, ...newState};

  //   this.render();
  // }

}

export function render(component, domSelector) {
  // debugger;
  const mountElement = document.querySelectorAll(domSelector);

  if (mountElement.length === 0)
    throw Error('No mount point found for selector', domSelector);

  if (mountElement.length > 1)
    throw Error('Too many possible mount points found with selector', domSelector);

  console.log(component);

  const root = renderTree(component)

  if (!(root instanceof HTMLElement)) {
    throw Error('Cannot render', component, 'must be an instance of Component')
  }

  mountElement[0].appendChild(root);
}


/*
 * Simple wrapper for an element
 */
class Element {

  constructor(element, attributes, ...children) {
    this.element = element;
    this.attributes = attributes;
    this.children = children;
  }

}

/*
 * Simply create a wrapper element, we don't want to render just yet
 */
export function createElement(element, attributes, ...children) {
  return new Element(element, attributes, ...children);
}


export function renderTree(reenactElement) {

  // Just a piece of text
  if (!reenactElement.element) {
    return document.createTextNode(reenactElement);
  }

  const element = reenactElement.element;
  const attributes = reenactElement.attributes;
  const children = reenactElement.children;

  let domElement;

  // Terminal elements
  if (typeof element === 'string') {
    domElement = document.createElement(element);
  }

  // Another Element
  else if (element.prototype instanceof Component) {
    // We'll wrap it in a div
    domElement = document.createElement('div');
    const instance = new element(attributes)

    const rendered = renderTree(instance.render())
    domElement.appendChild(rendered);
  }

  else {
    throw Error('Unknwon element to render');
  }

  // Handle attributes
  if (attributes) {
    debugger;
    if ('style' in attributes && !(typeof attributes['style'] === 'string'))
      attributes['style'] = styleToString(attributes['style'])

    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {

        domElement.setAttribute(attr, attributes[attr])

      }
    }
  }



  // Children
  const renderedChildren = children
    .map(renderTree)
    .forEach(child => domElement.appendChild(child))

  return domElement;







  // debugger;


  // else if (element.prototype instanceof Component) {
  //   // debugger;
  //   let instance = new element();
  //   return instance.render();
  // }

  // throw Error('Unknown element');
}

function hyphenizeCamelCase(camelCase) {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function styleToString(styleMap) {
  return Object.keys(styleMap)
    .map(property => `${hyphenizeCamelCase(property)}: ${styleMap[property]}`)
    .join('; ')
}


export default {
  render,
  createElement
}