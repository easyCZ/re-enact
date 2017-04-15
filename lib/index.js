
export class Component {

  constructor(props) {
    this.props = props;
  }

}

export function render(component, domSelector) {
  // debugger;
  const mountElement = document.querySelectorAll(domSelector);

  if (mountElement.length === 0)
    throw Error('No mount point found for selector', domSelector);

  if (mountElement.length > 1)
    throw Error('Too many possible mount points found with selector', domSelector);

  if (!(component instanceof HTMLElement)) {
    throw Error('Cannot render', component, 'must be an instance of Component')
  }

  mountElement[0].appendChild(component);
}

export function createElement(element, attributes, ...children) {

  if (typeof element === 'string') {
    const elem = document.createElement(element);

    if (attributes) {

      if ('style' in attributes && !(typeof attributes['style'] === 'string'))
        attributes['style'] = styleToString(attributes['style'])

      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {

          elem.setAttribute(attr, attributes[attr])

        }
      }
    }

    children.forEach(child => {
      // debugger;
      if (child && typeof child === 'string') {
        elem.appendChild(document.createTextNode(child))
      }

      if (child instanceof HTMLElement) {
        elem.appendChild(child);
      }

    })

    return elem;
  }

  else if (element.prototype instanceof Component) {
    // debugger;
    let instance = new element();
    return instance.render();
  }

  throw Error('Unknown element');
}

function styleToString(styleMap) {
  return Object.keys(styleMap)
    .map(property => `${property}: ${styleMap[property]}`)
    .join('; ')
}


export default {
  render,
  createElement
}