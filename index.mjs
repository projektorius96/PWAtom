import { app, BrowserWindow, screen, ipcMain } from 'electron';
import node_path from 'node:path';

app.whenReady().then(() => {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const context = new BrowserWindow({
        webPreferences: {
            preload/* ^1 */: node_path.join(node_path.resolve(), 'preload.mjs'),
            sandbox: false, /* to allow Node .mjs (ES6) modules to be loaded within preload refer^1 */
        },
        frame: /* ! */false,
        width,
        height,
        movable: true
    })
    
    context.loadFile('index.html')

    ipcMain.handle('action:minimize', ()=>context.minimize())

})