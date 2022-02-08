const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')

contextBridge.exposeInMainWorld(
  'ipcMain', 
  {
    dialog: () => require('dialog'),
    fs: () => require('fs')
  }
)