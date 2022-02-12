const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  let win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)