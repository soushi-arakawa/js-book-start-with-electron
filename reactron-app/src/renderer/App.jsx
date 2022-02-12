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
  render() {
    return (
      <div className="alert alert-primary">
        <h2>Content Component</h2>
        <p>これはContentクラスコンポーネントのサンプルです。</p>
      </div>
    )
  }
}

export default hot(App)
