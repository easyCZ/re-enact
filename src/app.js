import ReEnact, { Component } from '../lib'


class Navbar extends Component {

  render() {
    return (
      <nav style={{ backgroundColor: 'yellow', height: '50px' }} />
    )
  }

}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

  }

  componentDidMount() {
    setInterval(() => this.setState({ counter: this.state.counter + 1}), 1000);
  }


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
            Counter: { this.state.counter }
          </p>
        </div>
      </div>
    )
  }

}


ReEnact.render(<App />, '.container');