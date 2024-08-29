import { app, BrowserWindow } from "electron"

import { fileURLToPath } from 'node:url'
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createWindow() {
    const win = new BrowserWindow({
        icon: path.join("logo.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.mjs")
        }
    })

    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    win.loadURL(process.env['VITE_DEV_SERVER_URL']!)
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.whenReady().then(createWindow)