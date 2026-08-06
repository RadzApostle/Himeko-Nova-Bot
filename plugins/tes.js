let handler = async (m) => {
  let himeko = `
*「 🎸 HimekoNova MD 」*

Hmph... apa sih, manggil-manggil himeko segala... 🙄
Yasudah, kalau kamu *beneran* butuh, ketik aja *.menu* ✨

(Tapi jangan ganggu aku lagi latihan bass, ya...) 😏
`

  m.reply(himeko)
}

handler.customPrefix = /^(tes|bot|himeko|test)$/i
handler.command = new RegExp

export default handler