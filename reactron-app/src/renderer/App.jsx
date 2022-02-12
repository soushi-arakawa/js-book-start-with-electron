import React from 'react'
import { hot } from 'react-hot-loader/root'
import { remote } from 'electron'
import fs from 'fs'
import './App.css'

const dialog = remote.dialog

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
      message: 'this is sample message...'
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e) {
    const w = remote.getCurrentWindow()
    const result = dialog.showOpenDialogSync(w, {
      properties: ['openFile'],
      filters: [
        { name: 'Text Files', extensions: ['txt'] }
      ]
    })
    let re = ''
    let pth = ''
    let msg = ''
    if (result !== undefined) {
      pth = result[0]
      re = fs.readFileSync(pth).toString()
      msg = '"' + pth + '"をロードしました。'
      this.setState((state) => ({
        message: re
      }))
    } else {
      re = 'canceled'
      msg = 'キャンセルしました'
    }
    dialog.showMessageBox(w, {
      title: 'Message',
      message: msg
    })
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary">
          <h2 style={this.state.style}>Content Component {this.state.count}</h2>
          <textarea className="font-control" rows="5" value={this.state.message}></textarea>
          <button className="btn btn-primary mt-3" onClick={this.doAction}>Click</button>
        </div>
      </div>
    )
  }
}

export default hot(App)
