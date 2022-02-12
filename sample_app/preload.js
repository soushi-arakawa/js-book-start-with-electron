const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipcMain', 
  {
    fs: () => require('fs'),
    https: () => require('https'),
    showErrorMessage: (title, message) => ipcRenderer.invoke('showErrorMessage', title, message),
    showOpenDialog: () => ipcRenderer.invoke('showOpenDialog'),
    createTable: () => ipcRenderer.invoke('createTable'),
    addUser: async(name, mail, tel) => ipcRenderer.invoke('addUser', name, mail, tel),
  }
)