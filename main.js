const {app, BrowserWindow} = require('electron/main')
const path = require('path')

function createWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height:700,
        webPreferences: {
            preload: path.join(__dirname, 'index.js')
        }
    })
    window.setMenuBarVisibility(false)
    window.loadFile('index.html')
}


app.whenReady().then(()=>{
    createWindow()

    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})