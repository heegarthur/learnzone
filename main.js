
const {
  app,
  BrowserWindow,
  globalShortcut,
  powerSaveBlocker
} = require('electron');
const path = require('path');

let mainWindow;
const psbId = powerSaveBlocker.start('prevent-display-sleep');
console.log('[PSB] active →', powerSaveBlocker.isStarted(psbId));

function forceFullscreen() {
  if (mainWindow && !mainWindow.isFullScreen()) {
    console.warn('⚠️  window left fullscreen');
    mainWindow.setFullScreen(true);
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    kiosk: true,
    frame: false,
    alwaysOnTop: false,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);
  psbId = powerSaveBlocker.start('prevent-display-sleep');
  console.log('powersaveblockedid: ',psbId);

  const pollId = setInterval(() => forceFullscreen(), 1_000);

  ['leave-full-screen', 'minimize', 'restore', 'blur'].forEach(ev =>
    mainWindow.on(ev, forceFullscreen)
  );

  mainWindow.on('closed', () => {
    clearInterval(pollId);
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('Control+Shift+Q', app.quit);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', app.quit);

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  powerSaveBlocker.stop(psbId);
});
