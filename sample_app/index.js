const { app, BrowserWindow } = require('electron')

const html = '<html><head>'
+ '<title>HTML STRING</title>'
+ '</head><body>'
+ '<h1>HTML STRING</h1>'
+ '<p>This is string content.</p>'
+ '</body></html>'

function createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeINtegration: true
    }
  })
  win.loadFile('index.html')

  let child = new BrowserWindow({
    width: 350,
    height: 200,
    parent: win,
    webPreferences: {
      nodeIntegration: true
    }
  })

  child.loadURL('data:text/html;charset=utf-8,' + html)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})