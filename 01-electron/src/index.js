const {app, BrowserWindow} = require('electron')
require('electron-debug')({showDevTools: true})

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/view/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
