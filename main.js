const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    kiosk: true,
    frame: false,
    alwaysOnTop: false,
    icon: path.join(__dirname,  'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);

  setInterval(() => {
    if (!mainWindow.isFullScreen()) {
      console.log('⚠️ window is not fullscreen anymore!');
      notfullscreen()
    }
  }, 1000);

  mainWindow.on('leave-full-screen', () => {
    console.log('⚠️ Gebruiker verlaat fullscreen');
    notfullscreen()
  });

  mainWindow.on('minimize', () => {
    console.log('⚠️ minimalised');
    notfullscreen()
  });


}



app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('Control+Shift+Q', () => {
    app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
