"use strict";
exports.__esModule = true;
var wechaty_1 = require("wechaty");
var bot = wechaty_1.Wechaty.instance({ profile: wechaty_1.Config.DEFAULT_PROFILE });
bot
    .on('scan', function (url, code) {
    if (!/201|200/.test(String(code))) {
        var loginUrl = url.replace(/\/qrcode\//, '/l/');
        console.log(loginUrl);
    }
})
    .on('login', function (user) { return console.log(user + " logined"); })
    .on('message', function (m) {
    console.log("RECV: " + m);
})
    .init()["catch"](function (e) { return console.error('bot.init() error: ' + e); });
