import { Component, render, createElement } from './index'

class App extends Component {

  render() {
    return createElement('div', { width: 500 }, 'Hello World');
  }

}

render(App, '.container');