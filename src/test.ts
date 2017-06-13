import {
  Config,
  Wechaty
} from 'wechaty'
const bot = Wechaty.instance({ profile: Config.DEFAULT_PROFILE })
bot
.on('scan', (url, code) => {
  if (!/201|200/.test(String(code))) {
    const loginUrl = url.replace(/\/qrcode\//, '/l/')
    console.log(loginUrl)
  }
})
.on('login'	  , user => console.log(`${user} logined`))
.on('message', m => {
  console.log(`RECV: ${m}`)
})
.init()
.catch(e => console.error('bot.init() error: ' + e))