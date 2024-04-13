const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '+27838682283'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'moodssby563@gmail.com'
global.github = 'https://github.com/EX-BOTS/BAT-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/moodssby563/' // 
global.sudo = process.env.SUDO || "2347045035241"
global.devs = '2347045035241'
global.website = 'https://github.com/EX-BOTS/BAT-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0s4TFNlZWx2U3F3YjNQY1NMaTgvazhGK01paktnd3QyZEJWNUEyNmNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHFweklFZ2Jvbms4U29XTmpLbi9XZXpNeWRoQ2Nqd0x3cnRFemFvZWJ3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSjJlT3FRelhLQ3IzVW9teFErV1VXVjBZdU1lUjQyRWNKNytTNGVJUFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqUEFwQnAreSthdGNxTDQzSlE2K3h1MTNkY1V0K3ZiMXRjSlhIa2JVc0JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFINU9wcDQxTStIYzZMTDhYUG1ob0VIMGlCWjFjMW9mL2ljRVBoTFFmbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InloL3YyYkFjamp2NDFPSG9wM2VBZVNFUnp0Vk42b1BqY25TZUNDME54aWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU8yVGFJZ1BJVHJZb0taWWdydWRGUEUxUEMxR2ZEaGhPbXFrQW9kWjRuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2VpYnB5UUZWZjkyV2hLUjRodUhvb00rZGlkMTNETUp0Mm9DWjNrN3QzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iitobk0zZitvVmV6UkcvSXlERTc4TEN1MWg0ak00YUc5aFRjOHNjSEFLQmlGV1duNk50cHpRR1kxditUU0w0VEhnWVo3dmpJVXVqYTQzMWRDNk1MaGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IjFwZDJTdTNnWjBnRk5Ia3ZDT05yRVhpWWNiSnUzTnpXV09FM2J3dVVVWWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZJa0JhY2dkUzNTZ0VoRjBTQk5rV3ciLCJwaG9uZUlkIjoiZjYxZjFmYzItMDU1OC00ZDQwLTg0MWQtZDZkZDU5YzliNTBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNVM09zRjV4aEZhUTJodHRKTjVEaDJqYVkzZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQk00MnNoVTNOZm9VMExyZUt2cWZlT3p3MHRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3VVMU1nQkVLN042ckFHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVG5wNWpBcXQ1WlRYT1BnV0gwTyswUU1VVVRacFVmZjVBTHpwNDNpQmludz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWlZ5WWhBUEZDOEQrTENmZ2IyOWhHY3pzSnZBYWhnVGI2UlNUMXlBZHJFL2lMM0JEYWJFdGVSRVorQnhlVDh2bWdiTlFOamQ4ZThva2QvMkNaNUdBRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlhUNml6UzJPclBBZ0pLWUpxT2VuK3ZJZXQzbm4xZE94ZlV1Y3RXK29kbTZzOUZDWUN4dlVocUQvdkkrOXVET1Z2Q0g3VER3MXhtZ1E3NURSaHRtVmd3PT0ifSwibWUiOnsiaWQiOiIyNzgzODY4MjI4Mzo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1vb2Rzc2J5NTYzIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3ODM4NjgyMjgzOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTU2ZVl3S3JlV1Uxemo0Rmg5RHZ0RURGRkUyYVZIMytRQzg2ZU40Z1lwOCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMzAyMjY0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPTS8ifQ==",      //
  author:  process.env.PACK_AUTHER ||  'STAR MD BOT',
  packname:  process.env.PACK_NAME || 'MADE BY EXCEL ',

  botname:   process.env.BOT_NAME === undefined ? "STAR-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝚃𝙰𝚁-𝙼𝙳•* ",   //*『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ x』*\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"),        
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'BAT',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update'${__filename}'`)
    delete require.cache[file]
        require(file)
})
