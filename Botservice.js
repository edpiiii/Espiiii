const discord = require("discord.js");
const bot = new discord.Client();
const request = require("request");
const token = "NTg0NjgwNTcwMDg5MzczNzA2.XPOcrQ.MNSw0pBtvmRCbE-x0g2MCZf2E24";
const prefix = ":"
let DEV = "513323635868565524"
var listperm = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD",
    "ADD_REACTIONS", "VIEW_AUDIT_LOG", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES",
    "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS",
    "USE_VAD", "PRIORITY_SPEAKER", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
]
function getmention(mention){
    if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
		return bot.users.get(mention);
	}
} 
bot.on('ready', () => {
  if (bot.guilds.size < 2) return ("Serveur")
  console.log(
      `Bienvenue sur le Bot Helspiiii Créé par Espiii\n\n` +
      `{Informations du compte}-> \n` +
      `Pseudo       : ${bot.user.tag}\n` +
      `ID           : ${bot.user.id}\n` +
      `Token        : ${token}\n` +
      `Serveurs     : ${bot.guilds.size}\n\n` +
      `{Autres informations}-> \n` +
      `System info  : ${process.platform}-${process.arch}\n` +
      `${process.release.name} version : ${process.version.slice(1)}\n\n` +
      `{Bot}-> \n` +
      `Prefix       : ${prefix}\n\n{Logs/Retours}->`)
});


bot.on("message", message => {
//    if (message.author.id != bot.user.id) return;
    var args = message.content.split(/ +/);
    switch (args[0]) {
		   case `<@584680570089373706>`:
			 if (message.deletable) message.delete();
			    mentionembed = new discord.RichEmbed();
			    mentionembed.setColor("#A0000");
			    mentionembed.setTitle("Ω_PREFIX_Ω");
			    mentionembed.setDescription("Cette interface donne mon prefix");
			    mentionembed.addField("Mon prefixe est", prefix);
			    mentionembed.addField("Qu'est-ce qu'un préfixe ?", "(image ci-dessous)");
			    mentionembed.setFooter('by espiiii#9333', "https://www.dropbox.com/s/0vftsx4vf3p5azu/dice.png?dl=1");
			    mentionembed.setImage("https://www.dropbox.com/s/6tfaww66obqvdcn/98277cb9c9cc3f9261262d337d4335f8.jpg?dl=1");
	         mentionembed.setAuthor('ServiceMod RP', 'https://www.dropbox.com/s/0vftsx4vf3p5azu/dice.png?dl=1', 'https://www.youtube.com/channel/UCadta9RvuJ3aJVAG9ZSQdUQ')
		      message.channel.send(mentionembed);
		      break;
		   case `${prefix}retourdev`:
		   if (message.deletable) message.delete();
//		       console.log("title : DEV", "color : red")
		       console.log(
		           "|**RETOUR**|Dev de " + "<@"  + message.author.id + "> \n" +
		            message.content.split(/ +/).slice(1, args.length) + "\n"
		       );
//		       console.log("--LOGS--", 'color : white')
		       break;
		    case `${prefix}service`:
		    var args = message.content.split(/ +/)
         const fonda = message.guild.roles.find('name', '----fonda----').id;
		    const fondateur = message.guild.roles.find('name', '[👑Fondateur]').id;
		
         const cofondateur = message.guild.roles.find('name', '[Co-Fondateur]').id;
		    const cofonda = message.guild.roles.find('name', '----cofonda----').id;
		
		    const respstaff = message.guild.roles.find('name', '----Respstaff----').id;
		    const responsablestaff = message.guild.roles.find('name', '[📎RESP•Staff]').id;

		   const admin = message.guild.roles.find('name', '----administrateur----').id;
		   const administrateur = message.guild.roles.find('name', '[📌Administrateur]').id;
		
		   const supermodo = message.guild.roles.find('name', '----super-modo----').id;
		   const supermoderateur = message.guild.roles.find('name', '[🛡️Super Modérateur]').id;
		
		    const modo = message.guild.roles.find('name', '----modo----').id;
         const moderateur = message.guild.roles.find('name', '[🗝️Modérateur]').id;

		    if (message.deletable) message.delete();
		       if (args[1] === "on"){
		            if (message.member.roles.has(fonda)) {
		                message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
		                message.member.addRole(fondateur);
		            }
		            if (message.member.roles.has(cofonda)) {
		                message.member.addRole(cofondateur)
			             message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
                 }
		            if (message.member.roles.has(respstaff)) {
		                message.member.addRole(responsablestaff)
			             message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
                 }
		            if (message.member.roles.has(admin)) {
		                message.member.addRole(administrateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
                 }
		            if (message.member.roles.has(supermodo)) {
		                message.member.addRole(supermoderateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
                 }
		            if (message.member.roles.has(modo)) {
		                message.member.addRole(moderateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous êtes en service.");
                 }
		        }
             if (args[1] === "off"){
			         		            if (message.member.roles.has(fonda)) {
		                message.channel.send("<@"+message.author.id+">"+" : Vous n''êtes plus en service.");
		                message.member.removeRole(fondateur);
		            }
		            if (message.member.roles.has(cofonda)) {
		                message.member.removeRole(cofondateur)
			             message.channel.send("<@"+message.author.id+">"+" : Vous n'êtes plus en service.");
                 }
		            if (message.member.roles.has(respstaff)) {
		                message.member.removeRole(responsablestaff)
			             message.channel.send("<@"+message.author.id+">"+" : Vous n'êtes plus en service.");
                 }
		            if (message.member.roles.has(admin)) {
		                message.member.removeRole(administrateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous n'êtes plus en service.");
                 }
		            if (message.member.roles.has(supermodo)) {
		                message.member.removeRole(supermoderateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous n'êtes plus en service.");
                 }
		            if (message.member.roles.has(modo)) {
		                message.member.removeRole(moderateur);
			             message.channel.send("<@"+message.author.id+">"+" : Vous n'êtes plus en service.");
                 }
             }
		
		    break;
		    
		             
		    case `${prefix}help`:
		    if (message.deletable) message.delete();
		    var helpembed = new discord.RichEmbed();
		    helpembed.setColor("#8B0000");
		    helpembed.setTitle("Help ServiceMod RP");
		    helpembed.setDescription("Voici mes commandes :");
//		    helpembed.addBlankField(true)
		    helpembed.addField("Pour activer votre service (si vous êtes staff) :", `Utilisation : \`${prefix}service on\``);
		    helpembed.addField("Pour désactiver votre service (et jouer rp)", `Utilisation : \`${prefix}service off\``);
		    helpembed.setFooter("by espiiii#9333", "https://www.dropbox.com/s/0vftsx4vf3p5azu/dice.png?dl=1");
		    helpembed.setAuthor("ServiceMod RP Tasye", "https://www.dropbox.com/s/0vftsx4vf3p5azu/dice.png?dl=1");
		    message.channel.send(helpembed)
    }
})


bot.login(token);
