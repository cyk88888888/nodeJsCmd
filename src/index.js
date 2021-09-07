let m = module.exports = {};
m.run = function () {
    let argv = process.argv.slice(2);
    if (argv[0] === '-v' || argv[0] === '--version') {
        console.log('  version is 0.0.1');
    } else if (argv[0] === '-h' || argv[0] === '--help') {
        console.log('  usage:\n');
        console.log('  -v --version [show version]');
    } else if(argv[0] === 'b' || argv[0] === 'build'){//ts模块编译成js
        for (let i = 1; i < argv.length; i++) {
            console.log("开始编译模块【%s】",argv[i]);
            console.log("编译模块【%s】结束",argv[i]);
        }
    } else {
        // console.log("未注册插件【%s】",argv[0]);
    }
    // let ts = require("./module/my-cmd/src/CmdPlugin_build");
    let xlsx = require("sheetjs");
    console.log(xlsx);
}


