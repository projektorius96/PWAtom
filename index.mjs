import { app, screen, BrowserWindow, ipcMain } from 'electron';
import node_path from 'node:path';

app.whenReady().then(() => {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const context = new BrowserWindow({
        webPreferences: {
            preload: node_path.join(node_path.resolve(), 'preload.mjs'),
            sandbox: false, /* DEV_NOTE # "sandbox:false" allows us to use ES6 module syntax in our preload script */
        },
        frame: /* ! */false,
        width,
        height,
        movable: true
    })
    
    context.loadFile('index.html')

    ipcMain.handle('action:minimize', ()=>context.minimize())

})