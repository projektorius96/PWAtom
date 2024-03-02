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

    const debugee = context.webContents.debugger;
        debugee.attach('1.3')
        debugee.sendCommand('Runtime.enable')
        debugee.on('message', (event, method, args)=>{
            if (method === 'Runtime.consoleAPICalled'){
                console.log(event.defaultPrevented)
                console.log(args)
            }
        })
    
    context.loadFile('index.html')

    ipcMain.handle('action:minimize', ()=>context.minimize())

})