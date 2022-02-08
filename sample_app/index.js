const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
  })
  win.loadFile('index.html')

  let child = new BrowserWindow({
    width: 350,
    height: 200,
    parent: win,
    frame: false,
    modal: true
  })

  child.loadFile('sub.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})