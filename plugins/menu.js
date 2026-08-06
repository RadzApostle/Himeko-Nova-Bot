import moment from 'moment-timezone'
import fs from 'fs'

moment.locale('id')

const MENU_SOUND = './media/tes1.mp3'

function formatTag(tag) {
  return tag.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function getGreeting() {
  const h = moment.tz('Asia/Jakarta').hour()
  if (h < 5) return '🌙 Selamat Dini Hari'
  if (h < 11) return '🌅 Selamat Pagi'
  if (h < 15) return '☀️ Selamat Siang'
  if (h < 18) return '🌇 Selamat Sore'
  return '🌙 Selamat Malam'
}

function getRuntime() {
  const sec = process.uptime()
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = Math.floor(sec % 60)
  if (h > 0) return `${h}h ${m}m ${s}s`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}

let handler = async (m, { conn, usedPrefix, command, text, isOwner }) => {
  try {
    const THUMB = global.thumb || (fs.existsSync('./media/thumbnail.jpg') ? fs.readFileSync('./media/thumbnail.jpg') : null)

    const who = m.sender
    const user = global.db.data.users[who]

    const botname = global.namebot || conn.user?.name || 'HimekoNova MD'
    const ownerName = global.nameown || 'RadzApostle'

    const limit = (isOwner || user.premiumTime >= 1) ? '∞ Unlimited' : user.limit
    const role = isOwner ? '👑 Owner' : (user.role || '✧ Member')
    const totalexp = user.totalexp || user.exp || 0
    const runtime = getRuntime()
    const now = moment.tz('Asia/Jakarta').format('HH:mm | DD MMM YYYY')
    const greeting = getGreeting()

    const plugins = Object.values(global.plugins || {}).filter(p => !p.disabled)

    const categories = {}
    for (const p of plugins) {
      const helps = Array.isArray(p.help) ? p.help : [p.help]
      const tags = Array.isArray(p.tags) ? p.tags : [p.tags]
      for (let tag of tags) {
        if (!tag) continue
        tag = tag.toLowerCase().trim()
        if (!categories[tag]) categories[tag] = []
        categories[tag].push({
          helps,
          limit: p.limit,
          premium: p.premium,
          owner: p.owner,
          admin: p.admin,
          prefix: !p.customPrefix
        })
      }
    }

    const menuType = (text || '').toLowerCase().trim()
    const arrayMenu = Object.keys(categories).sort()
    const totalCmd = plugins.reduce((a, p) => {
      const h = Array.isArray(p.help) ? p.help : [p.help]
      return a + h.filter(Boolean).length
    }, 0)

    if (!menuType || (!categories[menuType] && menuType !== 'all')) {

      const header = `[ ✦ ${botname} ✦ ]

• ${greeting}, *${m.pushName || 'Traveler'}*

— · USER INFO · —
> · Role : ${role}
> · Limit : ${limit}
> · XP : ${totalexp}

— · BOT INFO · —
> · Nav : ${ownerName}
> · Cmds : ${totalCmd} Commands
> · Runtime : ${runtime}
> · Time : ${now}
> · Prefix : [ ${usedPrefix} ]

— · KETERANGAN · —
> Ⓟ Premium · Ⓛ Limit
> Ⓞ Owner · Ⓐ Admin

— · MENU TERSEDIA · —
${arrayMenu.map(v => `> • ${usedPrefix}menu ${v}`).join('\n')}
> • ${usedPrefix}menu all — semua fitur

· Astral Express — Ride the Stars ·`.trim()

      const msgOptions = {
        nativeFlow: [
          {
            text: '✦ Pilih Kategori Menu',
            sections: [
              {
                title: `✦ Semua Kategori (${arrayMenu.length})`,
                rows: arrayMenu.map(v => ({
                  header: '',
                  title: `✦ ${formatTag(v)}`,
                  description: `Lihat menu ${formatTag(v)}`,
                  id: `${usedPrefix}${command} ${v}`
                }))
              }
            ]
          },
          { text: '✦ All Menu', id: `${usedPrefix}${command} all` }
        ]
      }

      if (THUMB) {
        await conn.sendMessage(m.chat, {
          image: THUMB,
          caption: header,
          footer: `✦ HimekoNova MD — Astral Express Edition ✦`,
          ...msgOptions
        }, { quoted: m })
      } else {
        await conn.sendMessage(m.chat, {
          text: header,
          footer: `✦ HimekoNova MD — Astral Express Edition ✦`,
          ...msgOptions
        }, { quoted: m })
      }

      if (MENU_SOUND && fs.existsSync(MENU_SOUND)) {
        await conn.sendFile(m.chat, MENU_SOUND, 'menu.mp3', '', m, true, {
          mimetype: 'audio/mp4',
          ptt: true
        })
      }
      return
    }

    let menuText = []
    const targets = menuType === 'all' ? arrayMenu : [menuType]

    for (const tag of targets) {
      if (!categories[tag]) continue
      menuText.push(`[ ✦ ${formatTag(tag).toUpperCase()} ✦ ]`)
      for (const item of categories[tag]) {
        for (const cmd of item.helps) {
          if (!cmd) continue
          const prefix = item.prefix ? usedPrefix : ''
          let info = ''
          if (item.premium) info += ` Ⓟ`
          if (item.limit) info += ` Ⓛ`
          if (item.owner) info += ' Ⓞ'
          if (item.admin) info += ' Ⓐ'
          menuText.push(`> • ${prefix}${cmd}${info}`)
        }
      }
      menuText.push('')
    }

    menuText.push('· HimekoNova MD — Astral Express ·')

    const caption = menuText.join('\n').trim()

    if (THUMB) {
      await conn.sendMessage(m.chat, { image: THUMB, caption }, { quoted: m })
    } else {
      await conn.sendMessage(m.chat, { text: caption }, { quoted: m })
    }

  } catch (e) {
    console.error(e)
    m.reply('✦ Menu error — please try again.')
  }
}

handler.command = /^(menu|help)$/i
handler.tags = ['main']
handler.help = ['menu']

export default handler