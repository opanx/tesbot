const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku, role, prema) => {
        return `🔰 -----[ *MENU ${botName}* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│> Nama : ${pushname}
┃│> User : ${prema}
┃│> Uang : Rp:${uangku}
┃│> Xp : ${reqXp}
┃│> Level : ${getLevelingLevel(sender)}
┃│> Rank : ${role}
┃│> User ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│> *${prefix}info*
┃│> *${prefix}runtime*
┃│> *${prefix}ping*
┃│> *${prefix}donasi*
┃│> *${prefix}iklan*
┃│> *${prefix}owner*
┃│───────────────────
┃│> *${prefix}simplemenu*
┃│> *${prefix}makermenu*
┃│> *${prefix}gabutmenu*
┃│> *${prefix}downloadmenu*
┃│> *${prefix}randommenu*
┃│> *${prefix}dompetmenu*
┃│> *${prefix}othermenu*
┃│> *${prefix}groupmenu*
┃│> *${prefix}soundmenu*
┃│> *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}
exports.help = help
