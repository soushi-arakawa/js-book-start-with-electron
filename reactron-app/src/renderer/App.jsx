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
      flg: true
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    this.setState(state => ({
      flg: !state.flg
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2>Content Component {this.state.count}</h2>
          <p>This is Content-class component!!</p>
          {this.state.flg
            ? <div className="alert bg-danger">
              <h3>Sample Content</h3>
              <p>This is Content-class Component!!</p>
            </div>
            : <div className="alert bg-dark">
              <h3 className="text-light">
              This is Other Content
              </h3>
              <p className="text-light">
              this is Other Content message!!
              </p>
            </div>
          }
          <button className="btn btn-primary mt-3" onClick={this.doAction}>
            click
          </button>
        </div>
      </div>
    )
  }
}

export default hot(App)
