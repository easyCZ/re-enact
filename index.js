

export function render(component, domSelector) {
  const mountElement = document.querySelectorAll(domSelector);

  if (mountElement.length === 0)
    throw Error('No mount point found for selector', domSelector);

  if (mountElement.length > 1)
    throw Error('Too many possible mount points found with selector', domSelector);

  if (!(component.prototype instanceof Component)) {

  }

  const componentInstance = new component();
  const toRender = componentInstance.render();

  mountElement[0].appendChild(toRender);
}

export function createElement(element, attributes, children) {

  if (typeof element === 'string') {
    const elem = document.createElement(element, attributes);

    if (children && typeof children === 'string') {
      elem.appendChild(document.createTextNode(children))
    }

    return elem;
  }

  throw Error('Unknown element');
}

export class Component {}