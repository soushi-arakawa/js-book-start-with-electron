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
  let menu = new Menu()

  let file = new MenuItem({
    label: 'File',
    submenu:[
      new MenuItem({ label: 'New' }),
      new MenuItem({ label: 'File' }),
      new MenuItem({ label: 'Quit'})
    ]
  })
  menu.append(file)

  let edit = new MenuItem({
    label: 'Edit',
    submenu: [
      new MenuItem({ label: 'Cut' }),
      new MenuItem({ label: 'Copy' }),
      new MenuItem({ label: 'Paste' })
    ]
  })
  menu.append(edit)

  Menu.setApplicationMenu(menu)
}

createMenu()

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})