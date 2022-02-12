const { app, Menu, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  let win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      enableRemoteModule: true,
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
          createWindow()
        }},
        {role: 'close'},
        {type: 'separator'},
        {role: 'quit'},
      ]
    },
    {role: 'editMenu'},
    {
      label: 'Theme',
      submenu: [
        {label: 'textmate',
          click: () => { setTheme('textmate') }},
        {label: 'chrome',
          click: () => { setTheme('chrome') }},
        {label: 'github',
          click: () => { setTheme('github') }},
        {label: 'dracula',
          click: () => { setTheme('dracula') }},
        {label: 'twlight',
          click: () => { setTheme('twlight') }},
        {label: 'pastel on dark',
          click: () => { setTheme('pastel_on_dark') }}
      ]
    }
  ]
  let menu = Menu.buildFromTemplate(menu_temp)
  Menu.setApplicationMenu(menu)
}

function setTheme(theme) {
  let w = BrowserWindow.getFocusedWindow()
  w.webContents.executeJavaScript(`setTheme("${theme}")`)
}

createMenu()
app.whenReady().then(createWindow)