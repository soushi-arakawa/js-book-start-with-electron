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
    this.flg = true
    this.title = 'Hello, Component!'
    this.state = {
      message: 'This is Sample Component',
      classname: 'alert alert-warning'
    }
    setInterval(() => {
      if (this.flg) {
        this.setState(() => ({
          classname: 'alert alert-light',
          message: 'This is light alert sample.'
        }))
      } else {
        this.setState(() => ({
          classname: 'alert alert-warning',
          message: 'これは、warningアラートです。'
        }))
      }
      this.flg = !this.flg
    }, 1000)
  }

  render() {
    return (
      <div className={this.state.classname}>
        <h2>{this.title}</h2>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default hot(App)
