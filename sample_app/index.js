const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
  })
  win.loadFile('index.html')

  let child1 = new BrowserWindow({
    width: 350,
    height: 200,
    parent: win,
    frame: false,
    transparent: true
  })

  child1.loadFile('sub.html')

  let child2 = new BrowserWindow({
    width: 350,
    height: 200,
    parent: win,
    frame: false,
    opacity: 0.5
  })

  child2.loadFile('sub.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})