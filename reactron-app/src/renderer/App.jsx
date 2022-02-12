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
    this.style = [
      {
        color: 'red',
        backgroundColor: '#ffdddd',
        padding: '5px',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#990000'
      },
      {
        color: '#ddddff',
        backgroundColor: 'blue',
        padding: '5px',
        borderStyle: 'double',
        borderWidth: '7px',
        borderColor: '#eeeeff'
      }
    ]
    this.state = {
      style: this.style[0]
    }
    this.doChange = this.doChange.bind(this)
  }

  doChange(e) {
    console.log('doChange')
    const n = e.target.selectedIndex
    this.setState(state => ({
      style: this.style[n]
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2 style={this.state.style}>Content Component {this.state.count}</h2>
          <p style={this.state.style}>This is Content-class component!!</p>
          <select className="form-control" onChange={this.doChange}>
            <option>red</option>
            <option>blue</option>
          </select>
        </div>
      </div>
    )
  }
}

export default hot(App)
