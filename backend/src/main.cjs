const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    title: "Axe",
    width: 800,
    height: 600,
  });

  win.loadURL("http://localhost:5173/documents");
};

app.whenReady().then(() => {
  createWindow();
});
