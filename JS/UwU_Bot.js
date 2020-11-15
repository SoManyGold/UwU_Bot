const Discord = require("discord.js"); 
const { url } = require("inspector");
const { send } = require("process");
const ytdl = require("ytdl-core");

const Client = new Discord.Client

const prefix = "!"

Client.login("Nzc2MDM0NTI0NjE3NjM3ODg5.X6vAeA.QrX_PNH-5aeFFbtasUJpLGWnLGY")

Client.on("ready" , () => {
	console.group("Bot UwU mise à jour correctement")
	Client.user.setActivity("@BenjaminA2mains")
});

Client.on("message" , message => {
	if(message.content.startsWith(prefix + "play")){
		if(message.member.voice.channel){
			message.member.voice.channel.join().then(connection => {
				let args = message.content.split(" ");

				if(!args[1]){
					message.reply("lien non valide");
					connection.disconnect();
				}
				else {
					let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

					dispatcher.on("finish", () => {
						dispatcher.destroy();
						connection.disconnect();
					});

					dispatcher.on("error", err => {
						console.log("erreur de dispatcher : " + err);
					});
				}
			}).catch(err => {
				message.reply("Erreur lors de la connexions" + err);
			});
		}
		else {
			message.reply("Aller en tchat vocale puis retenter");
		}
	}

	if(message.author.bot) return;
	
	if(message.content == "uwu joue l'opening de No Game No Life"){
		message.channel.send("https://m1.casimages.com/m/2020/10/31//xpT8Kb-01-This-game.mp3");
		message.channel.send("Si tu veux le DL https://www.casimages.com/md/8PplOgre5Ub (4,34Mo)");
	}
});