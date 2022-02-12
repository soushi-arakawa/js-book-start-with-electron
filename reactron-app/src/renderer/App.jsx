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
    this.fieldvalue = ''
    this.state = {
      data: []
    }
    this.doChange = this.doChange.bind(this)
    this.doAction = this.doAction.bind(this)
  }

  doChange(e) {
    this.fieldvalue = e.target.value
  }

  doAction(e) {
    this.state.data.push(this.fieldvalue)
    this.setState(state => ({
      data: state.data
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2>Content Component {this.state.count}</h2>
          <p>This is Content-class component!!</p>
          <ul className="list-group">
            {this.state.data.map((val, index) => (
              <li key={index} className="list-group-item">{val}</li>
            ))}
          </ul>
          <hr />
          <div className="row m-0">
            <input type="text" className="form-control col-10" onChange={this.doChange} />
            <button className="btn btn-primary col-2" onClick={this.doAction}>click</button>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(App)
