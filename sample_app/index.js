const { app, Menu, MenuItem, dialog, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
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
  return win.id
}

function createMenu() {
  let menu_temp = [
    {
      label: 'File',
      submenu: [
        {label: 'New', click: () => {
          console.log('New menu.')
          createWindow()
        }},
        {label: 'File', click: () => {
          console.log('File menu.')
          createWindow()
        }},
        {role: 'close'},
        {type: 'separator'},
        {role: 'quit'},
      ]
    },
    {role: 'editMenu'},
    {role: 'viewMenu'},
    {role: 'windowMenu'},
    {
      label: 'Help',
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'zoomIn'},
        {role: 'zoomOut'}
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

ipcMain.handle('showErrorMessage', (event, title, message) => {
  console.log(`title: ${title}, message: ${message}`)
  dialog.showErrorBox(title, message)
})