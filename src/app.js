import ReEnact, { Component } from '../lib'


class Navbar extends Component {

  render() {
    return (
      <nav style={{ backgroundColor: 'yellow', height: '50px' }} />
    )
  }

}


class App extends Component {

  render() {
    return (
      <div>
        Hello World!
        <Navbar />
        <div>
          <img
            src="https://babeljs.io/images/logo.svg"
            style={{ maxWidth: '100px'}}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </p>
        </div>
      </div>
    )
  }

}


ReEnact.render(<App />, '.container');