import { app, screen, BrowserWindow, ipcMain } from 'electron';
import node_path from 'node:path';

app.whenReady().then(async () => {

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
            Promise.allSettled([
                debugee.sendCommand('Autofill.disable'),
                debugee.sendCommand('Runtime.enable'),
                debugee.sendCommand('Runtime.evaluate')
            ]).then();
        debugee.on('message', (event, method, args)=>{
            switch (method) {
                case 'Runtime.consoleAPICalled':
                    console.log(args)
                    break;
                case 'Runtime.executionContextCreated':
                    console.log(args["context"])
                    break;
            }
        })
    
    context.loadFile('index.html')

    ipcMain.handle('action:minimize', ()=>context.minimize())

})