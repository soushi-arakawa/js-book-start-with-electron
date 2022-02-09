const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipcMain', 
  {
    fs: () => require('fs'),
    showErrorMessage: (title, message) => ipcRenderer.invoke('showErrorMessage', title, message),
    showOpenDialog: () => ipcRenderer.invoke('showOpenDialog')
  }
)