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
  constructor() {
    super()
    this.title = 'Hello, Component!'
    this.message = 'This is Sample Component'
    this.classname = 'alert alert-warning'
  }

  render() {
    return (
      <div className={this.classname}>
        <h2>{this.title}</h2>
        <p>{this.message}</p>
      </div>
    )
  }
}

export default hot(App)
