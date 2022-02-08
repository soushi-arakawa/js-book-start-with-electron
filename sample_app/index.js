const { app, Menu, MenuItem, BrowserWindow } = require('electron')

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

function createMenu() {
  let menu_temp = [
    {
      label: 'File',
      submenu: [
        {label: 'New'},
        {label: 'File'},
        {type: 'separator'},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {label: 'Cut'},
        {label: 'Copy'},
        {label: 'Paste'}
      ]
    }
  ]
  let menu = Menu.buildFromTemplate(menu_temp)

  Menu.setApplicationMenu(menu)
}

createMenu()

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})