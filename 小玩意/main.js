const electron = require('electron');

const app = electron.app; // 控制应用生命周期

const autoUpdater = electron.autoUpdater; //调用检测版本模块

const ipc = electron.ipcMain; //调用进程通讯模块

const BrowserWindow = electron.BrowserWindow; // 创建本地浏览器窗口

const path = require('path');

const url = require('url');

let mainWindow; //指向窗口对象的一个全局引用，如果没有这个引用，那么当该javascript对象被垃圾回收的时候该窗口将会自动关闭

function createWindow() {

    mainWindow = new BrowserWindow({ // 创建一个新的浏览器窗口
        'width': 1200,
        'height': 750
    });

    mainWindow.show();

    mainWindow.loadURL(url.format({ // 并且装载应用的index.html页面
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //   mainWindow.webContents.openDevTools()       //  打开开发者工具

    mainWindow.on('closed', function() { // 当窗口关闭时调用方法
        mainWindow = null;
    });

}

app.on('ready', createWindow); // 当Electron完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。当所有的窗口被关闭后退出应用


app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});



var handleStartupEvent = function() {

    if (process.platform !== 'win32') {
        return false;
    }

    var squirrelCommand = process.argv[1];

    switch (squirrelCommand) {
        case '--squirrel-install':
        case '--squirrel-updated':
            install();
            return true;
        case '--squirrel-uninstall':
            uninstall();
            app.quit();
            return true;
        case '--squirrel-obsolete':
            app.quit();
            return true;
    }

    // 安装程序
    function install() {
        var cp = require('child_process');
        var updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
        var target = path.basename(process.execPath);
        var child = cp.spawn(updateDotExe, ["--createShortcut", target], { detached: true });
        child.on('close', function(code) {
            app.quit();
        });
    }

    // 卸载程序
    function uninstall() {
        var cp = require('child_process');
        var updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
        var target = path.basename(process.execPath);
        var child = cp.spawn(updateDotExe, ["--removeShortcut", target], { detached: true });
        child.on('close', function(code) {
            app.quit();
        });
    }

};

if (handleStartupEvent()) {
    return;
}


//版本检测
ipc.on('check-for-update', function(event, arg) {
    let appName = '手术室管家系统';
    let message = {
        error: '检查更新出错',
        checking: '正在检查更新……',
        updateAva: '下载更新成功',
        updateNotAva: '现在使用的就是最新版本，不用更新',
        downloaded: '最新版本已下载，将在重启程序后更新'
    };
    const os = require('os');
    const { dialog } = require('electron');
    autoUpdater.setFeedURL('C:/Users/xiaoniu/Desktop');
    autoUpdater.on('error', function(error) {
            return dialog.showMessageBox(mainWindow, {
                type: 'info',
                buttons: ['OK'],
                title: appName,
                message: message.error,
                detail: '\r' + error
            });
        })
        .on('checking-for-update', function(e) {
            return dialog.showMessageBox(mainWindow, {
                type: 'info',
                buttons: ['OK'],
                title: appName,
                message: message.checking
            });
        })
        .on('update-available', function(e) {
            var downloadConfirmation = dialog.showMessageBox(mainWindow, {
                type: 'info',
                buttons: ['OK'],
                title: appName,
                message: message.updateAva
            });
            if (downloadConfirmation === 0) {
                return;
            }
        })
        .on('update-not-available', function(e) {
            return dialog.showMessageBox(mainWindow, {
                type: 'info',
                buttons: ['OK'],
                title: appName,
                message: message.updateNotAva
            });
        })
        .on('update-downloaded', function(event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
            var index = dialog.showMessageBox(mainWindow, {
                type: 'info',
                buttons: ['现在重启', '稍后重启'],
                title: appName,
                message: message.downloaded,
                detail: releaseName + "\n\n" + releaseNotes
            });
            if (index === 1) return;
            autoUpdater.quitAndInstall();
        });
    autoUpdater.checkForUpdates();
});


//index.js调用
// var electron = require('electron');
// var ipc = electron.ipcRenderer;
// var updata = $('#Updata');
// updata.click(function(){
//   ipc.send('check-for-update');
// })