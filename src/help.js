const help = (prefix) => {
	return `

ISAAC SILVA BOT
	
*COMANDOS PRA FIGURINHAS:*

Comandos: *${prefix}sticker* ou *${prefix}stiker*
Desc: converter imagem / gif / vídeo em figurinha
Uso: Eniar ou responder imagem/gif/vídeo com legenda a *${prefix}sticker*\n
Comando : *${prefix}toimg*
Desc: Converte uma figurinha em imagem
Uso: Responda a figurinha com *${prefix}toimg*\n

*COMANDOS PARA USAR EM GRUPOS:*

Comando : *${prefix}welcome [1/0]*
Desc: Ativa o mode de boas vinda para o grupo
Uso: * ${prefix}bemvindo 1 ou 0* \n
Comando : *${prefix}add*
Desc: Adciona membro ao grupo
Uso: *${prefix} add 62813xxxxx* \n
Observação: Só pode ser usado se o bot for administrador do grupo \n
Comando : *${prefix}kick*
Desc: Expulsa membro do grupo
Uso: *${prefix} kick @[membro do grupo]* \n
Observação: Só pode ser usado se o bot for administrador do grupo \n
`
}

exports.help = help
