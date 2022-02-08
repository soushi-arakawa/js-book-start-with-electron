const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 500,
    backgroundColor: '#660066',
    webPreferences: {
      nodeINtegration: true
    }
  })
  win.loadURL('https://www.tuyano.com')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})