const { app, Menu, MenuItem, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 300,
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