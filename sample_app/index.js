const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeINtegration: true
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)