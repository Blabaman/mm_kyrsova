// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const express = require('express');
const app2 = express();
const port = 3000;

app2.use(express.static(path.join(__dirname, 'build')));

app2.get('/api/data', (req, res) => {
    res.json({ message: "Data from Node.js backend" });
});

app2.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});


let mainWindow;

// Create the browser window
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Load the React app
    mainWindow.loadURL(`file://${path.join(__dirname, 'build', 'index.html')}`);

    // Open DevTools if needed
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
