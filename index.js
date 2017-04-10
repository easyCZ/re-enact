

export function render(component, domSelector) {
  const mountElement = document.querySelectorAll(domSelector);

  if (mountElement.length === 0)
    throw Error('No mount point found for selector', domSelector);

  if (mountElement.length > 1)
    throw Error('Too many possible mount points found with selector', domSelector);

  if (!(component.prototype instanceof Component)) {
    throw Error('Cannot render', component, 'must be an instance of Component')
  }

  const componentInstance = new component();
  const toRender = componentInstance.render();

  mountElement[0].appendChild(toRender);
}

export function createElement(element, attributes, ...children) {

  if (typeof element === 'string') {
    const elem = document.createElement(element);

    if (attributes) {
      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr))
          elem.setAttribute(attr, attributes[attr])
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

    const instance = new element(attributes);

    return instance.render();

  }

  throw Error('Unknown element');
}

export class Component {}