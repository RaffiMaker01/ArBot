import fetch from 'node-fetch'

//Plugin By RafiMaker01
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/ccdf90556dad5ea6a1c03.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕╭─「_• Pulsa •_」\n│ • Smaryfren [088294533698]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [088212731547]\n│ • Gopay [088294533698]\n╰────\n\n_◛˖ Ingin Donasi? Chat nomor owner_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In RafiMaker01
// Subscribe YouTube BaleBim
// Tq To RafiMaker, Pak Tzy, Hw Modz