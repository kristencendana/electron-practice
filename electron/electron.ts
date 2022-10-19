// src/electron.js
const { app, BrowserWindow } = require('electron');
// requiring express server to connect to backend
require('../server/express.ts');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app for REACT
  win.loadFile('index.html');

  // load URL for express server (not needed since we added the backend server to localhost:8000 through client/index.html)
  // win.loadURL(`http://localhost:8000/`)
}

app.on('ready', createWindow);