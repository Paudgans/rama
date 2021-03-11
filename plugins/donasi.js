let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • THREE [089644906025]
│ • GOPAY [089644906025]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
