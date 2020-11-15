/* ========== Constence ========== */
const Discord = require("discord.js"); 
const { url } = require("inspector");
const { send } = require("process");
const ytdl = require("ytdl-core");

const Client = new Discord.Client

/* ========== Prefix ========== */
const prefix = "yt"

/* ========== Token ========== */
Client.login("Nzc2MDM0NTI0NjE3NjM3ODg5.X6vAeA.QrX_PNH-5aeFFbtasUJpLGWnLGY")

/* ========== Description du bot ========== */
Client.on("ready" , () => {
	console.group("Le Bot UwU a été correctement UwUé")
	Client.user.setActivity("@BenjaminA2mains")
});

/* ========== Lien Youtube.com ou Youtu.be ========== */
Client.on("message" , message => {
	if(message.content.startsWith("prefix")){
		if(message.member.voice.channel){
			message.member.voice.channel.join().then(connection => {
				let args = message.content.split(" ");

				if(!args[1]){
					message.reply("Lien non valide");
					connection.disconnect();
				}
				else {
					let dispatcher = connection.play(ytdl("https://youtu.be/" + args[1], { quality: "highestaudio" }));

					dispatcher.on("finish", () => {
						dispatcher.destroy();
						connection.disconnect();
					});

					dispatcher.on("error", err => {
						console.log("Erreur de dispatcher : " + err);
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
});