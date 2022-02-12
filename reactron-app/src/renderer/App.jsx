import React from 'react'
import { hot } from 'react-hot-loader/root'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary mb-4">
          <h1 className="display-4 text-light">Reactron-app</h1>
        </nav>
        <div className="container text-primary">
          <h2>App Component</h2>
          <p>これはAppクラスコンポーネントのサンプルです。</p>
          <Content />
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2>App Component {this.state.count}</h2>
          <p>This is App-class component!!</p>
          <button className="btn btn-primary" onClick={this.doAction}>click</button>
        </div>
      </div>
    )
  }
}

export default hot(App)
