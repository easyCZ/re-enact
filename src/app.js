import { Component, render, createElement } from './index'

class Navbar extends Component {

  render() {
    return createElement(
      'nav',
      { style: 'background-color: yellow; height: 50px' }
    );
  }

}


class App extends Component {

  render() {
    console.log(Test);
    return createElement(
      'div',
      { style: 'color: red' },
      'Hello World',

      createElement(
        Navbar,
        null
      ),

      createElement(
        'div',
        { className: 'testClass' },
        createElement(
          'img',
          {
            src: 'https://babeljs.io/images/logo.svg',
            style: 'max-width: 100px'
          }
        ),
        createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
        )
      )
    )
  }

}

render(App, '.container');